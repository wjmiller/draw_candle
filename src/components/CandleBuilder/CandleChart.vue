<!-- Template -->
<template>
  <g>
    <rect width="100%" height="100%" class="chart-bg"></rect>
    <text x="0" y="15" class="chart-num">Price</text>
    <text v-for="(price,index) in ch.prices" :key="'price-' + index" x="0" v-bind:y="50 + (40 * index)" class="chart-num">{{price}}</text>
    <line v-for="(price,index) in ch.prices" :key="'line-' + index" x1="50" v-bind:y1="50 + (40 * index)" x2="100%" v-bind:y2="50 + (40 * index)" class="chart-pline" />
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

  @import '../../Variables.scss';

  .chart-num {
    font: 14px 'Roboto';
  }

  .chart-pline {
    stroke-width:1;
    stroke-dasharray: 5;

    &:last-child {
      stroke-dasharray: 0;
    }
  }

  .dark {
    .chart-bg {
      fill: $blue-dark;
    }
    .chart-num {
      fill: #ddd;
    }
    .chart-pline {
      stroke:#888;
    }
  }

  .light {
    .chart-bg {
      fill: #fff;
    }
    .chart-num {
      fill: #333;
    }
    .chart-pline {
      stroke:#999;
    }
  }

</style>
