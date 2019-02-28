<template>
  <div id="app">
    <PriceChart></PriceChart>
  </div>
</template>

<script>
import PriceChart from './components/PriceChart/PriceChart.vue'

export default {
  name: 'app',
  components: {
    PriceChart
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
