<template>
  <div id="app">
    <DrawChart/>
  </div>
</template>

<script>
import DrawChart from './components/DrawChart/DrawChart.vue'

export default {
  name: 'app',
  components: {
    DrawChart
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
