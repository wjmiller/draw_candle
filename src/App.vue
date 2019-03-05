<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h3>Light Theme</h3>
          <CandleBuilder :cbdata="charts[0]"></CandleBuilder>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <h3>Dark Theme</h3>
          <CandleBuilder :cbdata="charts[1]"></CandleBuilder>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <button class="btn btn-default btn-block margin-top" v-on:click="getCandleData">Get Candle Data</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CandleBuilder from './components/CandleBuilder/CandleBuilder.vue'
import { eventBus } from './main.js';

export default {
  name: 'app',
  data() {
    return {
      charts: [
        {
          theme: 'light',
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
        {
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
        }
      ]
    }
  },
  components: {
    CandleBuilder
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
  }
  .margin-top {
    margin-top: 30px;
  }
</style>
