<template lang="html">
  <b-navbar>
    <b-container>
      <b-navbar-nav v-if="currentUser" class="ml-auto">
        <b-nav-item-dropdown :text="userProfile.name.split(' ')[0]" right>
          <b-dropdown-item @click="toAccount" href="">Account</b-dropdown-item>
          <b-dropdown-item @click="logout" href="">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
import {
  mapState
} from 'vuex'
const fb = require('../firebase.js')

export default {
  name: "navbar",
  computed: {
    ...mapState(['userProfile']),
    ...mapState(['currentUser'])
  },
  methods: {
    logout() {
      fb.auth.signOut().then(() => {
        this.$store.dispatch('clearData')
        this.$router.push('/login')
      }).catch(err => {})
    },
    toAccount() {
      this.$router.replace('/account')
    }
  }
}
</script>
