<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-5">

        </div>
        <div class="col-md-7">
          <CandleBuilder :cbdata="charts[0]"></CandleBuilder>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CandleBuilder from './components/CandleBuilder/CandleBuilder.vue'

export default {
  name: 'app',
  data() {
    return {
      charts: [
        {
          cdata: {
            prices: [10,8,6,4,2,0]
          },
          csdata: {
            bodyTop: 150,
            bodyHeight: 25,
            wickTop: 25,
            wickBottom: 25,
            candleRed: false
          }
        }
      ]
    }
  },
  components: {
    CandleBuilder
  }
}
</script>

<style>
</style>
