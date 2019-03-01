<!-- Template -->
<template>
  <g>
    <line x1="175" v-bind:y1="cs.bodyTop" x2="175" v-bind:y2="parseInt(cs.bodyTop) - parseInt(cs.wickTop)" class="candle-wick" />
    <rect :x="155" v-bind:y="cs.bodyTop" width="40" v-bind:height="cs.bodyHeight" v-bind:class="{ 'candle-green': !cs.candleRed, 'candle-red': cs.candleRed }"/>
    <line x1="175" v-bind:y1="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop) + parseInt(cs.wickBottom)" x2="175" v-bind:y2="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop)" class="candle-wick"/>
  </g>
</template>

<!-- Javascript -->
<script>

export default {
  name: 'CandleStick',
  props: ['cs']
}

</script>

<!-- CSS with 'stick' attribute for this component -->
<style stick>

  .candle-green {
    fill:#62C848;
  }

  .candle-red {
    fill:#E23B2B;
  }

  .candle-wick {
    stroke: #929299;
    stroke-width:2;
  }

</style>
