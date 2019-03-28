<template>
  <div id="app" :class="theme">
    <div class="container">
      <ActivityGroup
        v-for="(activity, index) in activities"
        :key="`act-group-${index}`"
        :activity="activity"
        :theme="theme"
        v-on:activity-group-complete="completeActivityGroup"
      />
    </div>
  </div>
</template>

<script>
import ActivityGroup from './components/ActivityGroup'
import AppData from './AppData.js'
import xAPI from './xAPI.js'

//set xAPI events to listen to
xAPI.setEvents(['activity-completed','activity-attempted'])

//create candle data from prices
AppData.activities.forEach(activity => activity.candles.forEach(candle => {
  const prices = candle.candlechart.cdata.pricePoints;
  const close = prices.slice(-1)[0] //get last item in array
  const open = prices[0]; //first item in array
  candle.candlechart.csdata = {
    open: open,
    close: close,
    high: Math.max(...prices),
    low: Math.min(...prices),
    candleRed:  open > close //if open > close then it means the price is falling
  }
}));



export default {
  name: 'app',
  data() {
    return AppData
  },
  components: {
    ActivityGroup
  },
  methods: {
    completeActivityGroup () {

    }
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
