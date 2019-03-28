<template>
<div id="app" v-bind:class="{'light': theme === 'light', 'dark':theme === 'dark'}">
  <Navbar></Navbar>
  <router-view :theme="theme"></router-view>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AppData from './AppData.js'

export default {
  name: 'app',
  data() {
    return AppData
  },
  components: {
    Navbar
  }
}
</script>
