<template>
  <div id="app">
    <div class="container">
      <ActivityGroup v-for="activity in activities" :activity="activity"/>
    </div>
  </div>
</template>

<script>
import ActivityGroup from './components/ActivityGroup'
import AppData from './AppData.js'

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
