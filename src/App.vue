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
                theme: 'dark',
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
              },
              feedback: {}
            },
            {
              pricechart: {},
              candlechart: {
                theme: 'dark',
                cdata: {
                  prices: [10,8,6,4,2,0]
                },
                csdata: {
                  bodyTop: 150,
                  bodyHeight: 25,
                  wickTop: 25,
                  wickBottom: 25,
                  candleRed: true
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
    eventBus.$on('return-candle-data', (data) => {
      console.log(data)
    });
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
