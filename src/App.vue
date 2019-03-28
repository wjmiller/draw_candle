<template>
<div id="app" v-bind:class="{'light': theme === 'light', 'dark':theme === 'dark'}">
  <Navbar v-if="currentUser"></Navbar>
  <router-view :theme="theme"></router-view>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import Navbar from './components/Navbar.vue'
import AppData from './AppData.js'

export default {
  name: 'app',
  computed: {
    ...mapState(['currentUser'])
  },
  data() {
    return AppData
  },
  components: {
    Navbar
  }
}
</script>
