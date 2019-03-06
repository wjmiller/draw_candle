<template>
  <div id="app">
    <div class="container">
      <ActivityGroup v-for="activity in activities" :activity="activity"/>
    </div>
  </div>
</template>

<script>
import ActivityGroup from './components/ActivityGroup'
import { eventBus } from './main.js';

export default {
  name: 'app',
  data() {
    return {
      activities: [
        {
          id: "samecandle",
          candles: [
            {
              pricechart: {},
              candlechart: {
                cdata: {
                  theme: 'dark',
                  prices: [10,8,6,4,2,0],
                  timeIntervals: ['10','11','12','13','14','15'],
                  timeLabel: 'Hr',
                  pricePoints: [2,6,8,4,10,6]
                },
                csdata: {
                  bodyTop: 120,
                  bodyHeight: 20,
                  wickTop: 20,
                  wickBottom: 20,
                  candleRed: true
                }
              },
              feedback: {}
            },
            {
              pricechart: {},
              candlechart: {
                cdata: {
                  theme: 'dark',
                  prices: [10,8,6,4,2,0],
                  timeIntervals: ['2/22','2/25','2/26','2/27','2/28'],
                  timeLabel: 'Day',
                  pricePoints: [2,4,8,10,6]
                },
                csdata: {
                  bodyTop: 120,
                  bodyHeight: 20,
                  wickTop: 20,
                  wickBottom: 20,
                  candleRed: false
                }
              },
              feedback: {}
            }
          ],
          questions: [
            {
              instruction: "Draw candles 1 and 2 correctly to view this question.",
              question: "Why are the two candles the same even though the two charts are different time frames?",
              feedback: {
                correct: "Even though there are two different time frames, the two candles have the exact same open, close, high and low values.",
              }
            }
          ]
        }
      ]
    }
  },
  components: {
    ActivityGroup
  },
  methods: {
    getCandleData() {
      eventBus.$emit('get-candle-data');
    }
  },
  created() {
    /*
    eventBus.$on('return-candle-data', (data) => {
      console.log(data)
    });
    */
  }
}
</script>

<style>
  #app {
    margin-bottom: 60px;
  }
  .margin-top {
    margin-top: 30px;
  }
</style>
