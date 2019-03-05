<!-- Template -->
<template>
  <g>
    <rect width="100%" height="100%" class="chart-bg"></rect>
    <text x="0" y="15" class="chart-num">Price</text>
    <text v-for="(price,index) in ch.prices" :key="'price-' + index" x="0" v-bind:y="54 + (50 * index)" class="chart-num">{{price}}</text>
    <line v-for="(price,index) in ch.prices" :key="'line-' + index" x1="50" v-bind:y1="50 + (50 * index)" x2="100%" v-bind:y2="50 + (50 * index)" stroke-dasharray="5,5" class="chart-line" />
  </g>
</template>

<!-- Javascript -->
<script>

export default {
  name: 'CandleChart',
  props: ['ch']
}

</script>

<!-- CSS with 'chart' attribute for this component -->
<style lang="scss" chart>

  .chart-num {
    font: 14px 'Roboto';
  }
  .chart-line {
    stroke-width:1;
  }

  .cb-dark {
    .chart-bg {
      fill: #242a41;
    }
    .chart-num {
      fill: #ddd;
    }
    .chart-line {
      stroke:#555;
    }
  }

  .cb-light {
    .chart-bg {
      fill: #fff;
    }
    .chart-num {
      fill: #333;
    }
    .chart-line {
      stroke:#999;
    }
  }

</style>
