<template lang="html">
  <div class="row candle-row">
      <div class="col-sm-12 col-md-12 col-lg-4">
        <PriceChart :pcdata="candle.candlechart.cdata"></PriceChart>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-5">
        <CandleBuilder :cbdata="candle.candlechart"></CandleBuilder>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-3">
        <CandleFeedback :active="active"/>
      </div>
  </div>
</template>

<script>
import CandleBuilder from './CandleBuilder/CandleBuilder.vue'
import PriceChart from './PriceChart.vue'
import CandleFeedback from './CandleFeedback.vue'

export default {
  name: 'CandleRow',
  props: ['candle'],
  data () {
    return {
      active: true
    }
  },
  components: {
    CandleBuilder,
    CandleFeedback,
    PriceChart
  }
}
</script>

<style lang="css" scoped>
</style>
