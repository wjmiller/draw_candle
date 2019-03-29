<template>
<section>
  <b-container>
    <b-row>
      <b-col>
        <b-button-close @click="close"></b-button-close>
        <div class="form-box">
          <h3>My Account</h3>

          <!-- My Account Form -->
          <b-form @submit.prevent="updateProfile">
            <b-input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />
            <b-input v-model.trim="email" type="email" :placeholder="userProfile.email" id="email" readonly />
            <b-button type="submit">Update Profile</b-button>
          </b-form>

          <!-- Success Message -->
          <transition name="fade">
            <p v-if="showSuccess" class="success">Profile Updated</p>
          </transition>
        </div>
      </b-col>
    </b-row>
  </b-container>
</section>
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
      // Update userProfile state
      this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        email: this.email !== '' ? this.email : this.userProfile.email
      })

      // Clear name and email fields
      this.name = ''
      this.email = ''

      // Show success message
      this.showSuccess = true

      // Remove success message after 2 seconds
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
// -----------------------------------------------------
// Import Variables
// -----------------------------------------------------

@import '../Variables.scss';

// -----------------------------------------------------
// Success Message Styles
// -----------------------------------------------------

.success {
    text-align: center;
    margin-top: 15px;
    font-weight: 600;
    color: $green;
}

// -----------------------------------------------------
// Form Box Scoped Styles
// -----------------------------------------------------

.form-box {
    h3 {
        margin-bottom: 15px;
    }

    .form-control[readonly] {
        border-color: #d1d1d1;
        background: #d1d1d1;
    }
}

// Dark/Light Theme Styles -----------------------------

.dark {
    .form-box {
        h3 {
            color: $dark-text-color;
        }
    }
}
</style>
