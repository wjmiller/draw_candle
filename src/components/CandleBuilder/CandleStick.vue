<!-- Template -->
<template>
  <g>
    <line x1="185" v-bind:y1="cs.bodyTop" x2="185" v-bind:y2="parseInt(cs.bodyTop) - parseInt(cs.wickTop)" class="candle-wick" />
    <rect :x="155" v-bind:y="cs.bodyTop" width="60" v-bind:height="cs.bodyHeight" v-bind:class="{ 'candle-green': !cs.candleRed, 'candle-red': cs.candleRed }"/>
    <line x1="185" v-bind:y1="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop) + parseInt(cs.wickBottom)" x2="185" v-bind:y2="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop)" class="candle-wick"/>
  </g>
</template>

<!-- Javascript -->
<script>

import { eventBus } from '../../main.js';

export default {
  name: 'CandleStick',
  props: ['cs'],
  created() {
    eventBus.$on('get-candle-data', () => {
      eventBus.$emit('return-candle-data', this.cs);
    });
  }
}

</script>

<!-- CSS with 'stick' attribute for this component -->
<style lang="scss" stick>

  .candle-green {
    fill:#62C848;
  }

  .candle-red {
    fill:#E23B2B;
  }

  .candle-wick {
    stroke-width:2;
  }

  .cb-dark {
    .candle-wick {
      stroke: #929299;
      stroke-width:2;
    }
  }

  .cb-light {
    .candle-wick {
      stroke: #444;
      stroke-width:2;
    }
  }

</style>
