<template>
  <div id="app" v-bind:class="{'light': theme === 'light', 'dark':theme === 'dark'}">
    <div class="container">
      <ActivityGroup v-for="(activity, index) in activities" :key="'act-group-' + index" :activity="activity" :theme="theme"/>
    </div>
  </div>
</template>

<script>
import ActivityGroup from './components/ActivityGroup'
import AppData from './AppData.js'

AppData.activities.forEach(activity => activity.candles.forEach(candle => {
  const prices = candle.candlechart.cdata.pricePoints;
  const close = prices.slice(-1)[0]
  const open = prices[0];
  candle.candlechart.csdata = {
    open: open,
    close: close,
    high: Math.max(...prices),
    low: Math.min(...prices),
    candleRed:  open > close
  }
}));

export default {
  name: 'app',
  data() {
    return AppData
  },
  components: {
    ActivityGroup
  }
}
</script>

<style>
  #app {
    margin-bottom: 60px;
    color: #fff;
  }
  .margin-top {
    margin-top: 30px;
  }
</style>
