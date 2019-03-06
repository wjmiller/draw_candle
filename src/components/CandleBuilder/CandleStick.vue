<!-- Template -->
<template>
  <g>
    <line x1="165" v-bind:y1="cs.bodyTop" x2="165" v-bind:y2="parseInt(cs.bodyTop) - parseInt(cs.wickTop)" class="candle-wick" />
    <rect :x="135" v-bind:y="cs.bodyTop" width="60" v-bind:height="cs.bodyHeight" v-bind:class="{ 'candle-green': !cs.candleRed, 'candle-red': cs.candleRed }"/>
    <line x1="165" v-bind:y1="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop) + parseInt(cs.wickBottom)" x2="165" v-bind:y2="parseInt(cs.bodyHeight) + parseInt(cs.bodyTop)" class="candle-wick"/>
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

  @import '../../Variables.scss';

  .candle-green {
    fill:$green;
  }

  .candle-red {
    fill:$red;
  }

  .candle-wick {
    stroke-width:2;
  }

  .dark {
    .candle-wick {
      stroke: $gray;
    }
  }

  .light {
    .candle-wick {
      stroke: #444;
    }
  }

</style>
