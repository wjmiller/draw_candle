<template lang="html">
  <b-navbar>
    <b-container>
      <b-navbar-nav v-if="currentUser" class="ml-auto">
        <b-nav-item-dropdown :text="firstNameOnly" right>
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
    ...mapState(['currentUser']),
    firstNameOnly () {return this.userProfile.name ? this.userProfile.name.split(' ')[0] : ''}
  },
  methods: {
    logout() {
      // Sign out of Firebase auth
      fb.auth.signOut().then(() => {
        // Clear currentUser/userProfile state data
        this.$store.dispatch('clearData')
        // Route to login view
        this.$router.push('/login')
      }).catch(err => {})
    },
    toAccount() {
      // Route to Account
      this.$router.replace('/account')
    }
  }
}
</script>
