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
