<template>
<div id="app" v-bind:class="{'light': theme === 'light', 'dark':theme === 'dark'}">
  <Navbar v-on:theme-switched="toggleTheme"></Navbar>
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
  },
  methods: {
    toggleTheme (val) {
      if (val === 'dark' || val === 'light') this.theme = val
    }
  }
}
</script>
