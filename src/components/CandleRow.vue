<template lang="html">
  <div class="row candle-row">
    <div class="col-sm-12 col-md-12 col-lg-4">
      <PriceChart :pcdata="candle.candlechart.cdata"></PriceChart>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-5">
      <CandleBuilder :cbdata="candle.candlechart" v-on:candleChange="isCorrect"></CandleBuilder>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-3">
      <CandleFeedback :active="active" :feedbackData="feedbackData" :correct="correct" :checked="checked"/>
    </div>
  </div>
</template>

<script>
import CandleBuilder from './CandleBuilder.vue'
import PriceChart from './PriceChart.vue'
import CandleFeedback from './CandleFeedback.vue'

export default {
  name: 'CandleRow',
  props: ['candle'],
  data () {
    return {
      active: true,
      correct: false,
      checked: false,
      feedbackData: {},
      checkData: {}
    }
  },
  methods: {
    isCorrect (data) {
      this.feedbackData = {
        open: Math.abs(this.candle.candlechart.csdata.open - data.open),
        close: Math.abs(this.candle.candlechart.csdata.close - data.close),
        high: Math.abs(this.candle.candlechart.csdata.high - data.high),
        low: Math.abs(this.candle.candlechart.csdata.low - data.low),
      }
      this.checked = false;
      this.correct = this.feedbackData.open === 0 && this.feedbackData.close === 0 && this.feedbackData.high === 0 && this.feedbackData.low === 0 ? true : false;
      this.$emit('candle-correct', this.correct);
    }
  },
  components: {
    CandleBuilder,
    CandleFeedback,
    PriceChart
  }
}
</script>

<style lang="scss" crow>

  @import '../Variables.scss';

  .activity-group {
    .candle-row {
      padding-bottom: 30px;
      margin-bottom: 50px;

      @media(min-width: 576px) {
        padding-bottom: 5px;
        margin-bottom: 25px;
      }
    }
  }

  .dark {
    .activity-group {
      .candle-row {
        border-bottom: 1px solid lighten($pane-dark-border, 10%);

        @media(min-width: 576px) {
          border-bottom: 1px solid $pane-dark-border;
        }
      }
    }
  }

  .light {
    .activity-group {
      .candle-row {
        border-bottom: 1px solid $pane-light-border;
      }
    }
  }

</style>
