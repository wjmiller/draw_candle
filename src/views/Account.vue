<template>
<b-container>
  <b-row>
    <b-col>
      <b-button-close @click="close"></b-button-close>
      <div class="form-box">
        <h3>My Account</h3>

        <b-form @submit.prevent="updateProfile">
          <b-input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />
          <b-input v-model.trim="email" type="email" :placeholder="userProfile.email" id="email" />
          <b-button type="submit">Update Profile</b-button>
        </b-form>

        <transition name="fade">
          <p v-if="showSuccess" class="success">Profile Updated</p>
        </transition>
      </div>
    </b-col>
  </b-row>
</b-container>
</template>


<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      name: '',
      email: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        email: this.email !== '' ? this.email : this.userProfile.email
      })

      this.name = ''
      this.title = ''

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    },
    close() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../Variables.scss';

.success {
    margin-top: 15px;
    font-weight: 600;
    color: $green;
}

.form-box {
    h3 {
        margin-bottom: 15px;
    }
}

.close {
    text-shadow: none;
    color: #fff;
    font-size: 4.2em;
    font-weight: 400;
    line-height: 36px;

    &:active,
    &:hover,
    &focus {
        color: #fff;
    }
}
</style>
