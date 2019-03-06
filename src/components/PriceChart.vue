<!-- Template -->
<template>
  <div class="price-chart row">
    <div class="col-sm-12">
      <svg id="pchart" width="100%" v-bind:height="88 + ((pcdata.prices.length - 1) * 40)">
        <g>
          <rect width="100%" height="100%" class="chart-bg"></rect>
          <text x="0" y="15" class="chart-num">Price</text>
          <text v-for="(price,index) in pcdata.prices" :key="'price-' + index" x="0" v-bind:y="50 + (40 * index)" class="chart-num">{{price}}</text>
          <g>
            <line v-for="(price,index) in pcdata.prices" :key="'pline-' + index" x1="50" v-bind:y1="50 + (40 * index)" x2="100%" v-bind:y2="50 + (40 * index)" class="chart-pline" />
          </g>
          <line v-for="(time,index) in pcdata.timeIntervals" :key="'tline-' + index" v-bind:x1="70 + (40 * index)" v-bind:y1="58 + (40 * (pcdata.prices.length - 1))" v-bind:x2="70 + (40 * index)" v-bind:y2="50 + (40 * (pcdata.prices.length - 1))" class="chart-tline" />
          <text v-for="(time,index) in pcdata.timeIntervals" :key="'time-' + index" v-bind:x="66 + (40 * index)" v-bind:y="74 + (40 * (pcdata.prices.length - 1))" class="chart-time">{{time}}</text>
          <text v-bind:x="120 + (40 * (pcdata.timeIntervals.length - 1))" v-bind:y="74 + (40 * (pcdata.prices.length - 1))" class="chart-num">{{pcdata.timeLabel}}</text>
          <g>
            <line v-for="(point,index) in pricePointData" :key="'ppline-' + index" v-bind:x1="point[0]" v-bind:y1="point[2]" v-bind:x2="point[1]" v-bind:y2="point[3]" class="chart-ppline" />
          </g>
          <circle v-for="(point,index) in pricePointData" :key="'ppoint-' + index" v-bind:cx="point[0]" v-bind:cy="point[2]" r="5" class="price-point"></circle>
        </g>
      </svg>
    </div>
  </div>
</template>

<!-- Javascript -->
<script>

export default {
  name: 'PriceChart',
  props: ['pcdata'],
  data() {
    return {
      pricePointData: []
    }
  },
  created() {
    for (let i = 0; i <= this.pcdata.pricePoints.length - 1; i++) {
      const priceIndex1 = this.pcdata.prices.indexOf(this.pcdata.pricePoints[i]);
      const priceIndex2 = this.pcdata.prices.indexOf(this.pcdata.pricePoints[i + 1]);
      this.pricePointData.push([
        70 + (i * 40),
        70 + ((i + 1) * 40),
        50 + (priceIndex1 * 40),
        50 + (priceIndex2 * 40)
      ]);
    }

  }
}

</script>

<!-- CSS with 'pchart' attribute for this component -->
<style lang="scss" pchart>

  @import '../Variables.scss';

  .price-chart {
    padding: 18px 0 0;
    margin-bottom: 15px;
  }

  .chart-num {
    font: 14px 'Roboto';
  }

  .chart-time {
    font: 13px 'Roboto';
  }

  .chart-pline {
    stroke-width:1;
    stroke-dasharray: 5;

    &:last-child {
      stroke-dasharray: 0;
    }
  }

  .chart-ppline {
    stroke-width: 3;
  }

  .chart-ppline:last-child {
    display:none;
  }

  .chart-tline {
    stroke-width:1;
  }

  .dark {
    .chart-bg {
      fill: $group-dark-bg;
    }
    .chart-num, .chart-time {
      fill: $chart-dark-text;
    }
    .chart-pline, .chart-tline {
      stroke:$chart-dark-lines;
    }

    .chart-ppline {
      stroke:$chart-dark-curve;
    }

    .price-point {
      fill:$blue-dark;
      stroke: $chart-dark-points;
      stroke-width:4;
    }
  }

  .light {
    .chart-bg {
      fill: $group-light-bg;
    }
    .chart-num, .chart-time {
      fill:$chart-light-text;
    }
    .chart-pline, .chart-tline {
      stroke:$chart-light-lines;
    }

    .chart-ppline {
      stroke:$chart-light-curve;
    }

    .price-point {
      fill:#fff;
      stroke: $chart-light-points;
      stroke-width:4;
    }
  }

</style>
