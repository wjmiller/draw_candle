<template lang="html">
  <div class="row candle-row">
      <div class="col-md-3">
        Chart goes here
      </div>
      <div class="col-md-6">
        <CandleBuilder :cbdata="candle.candlechart"></CandleBuilder>
      </div>
      <div class="col-md-3">
        <CandleFeedback :active="active"/>
      </div>
  </div>
</template>

<script>
import CandleBuilder from './CandleBuilder/CandleBuilder.vue'
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
    CandleFeedback
  }
}
</script>

<style lang="css" scoped>
</style>
