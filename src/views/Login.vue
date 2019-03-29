<template>
<section class="view">
  <div class="form-box" :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">

    <!-- Logo Images -->
    <img v-if="theme == 'dark'" src="../assets/images/logos/logo.png" />
    <img v-else src="../assets/images/logos/logo_light.png" />

    <!-- Login Form -->
    <b-form v-if="showLoginForm" @submit.prevent="login">
      <b-input type="email" v-model.trim="loginForm.email" placeholder="Email" id="loginEmail" required />
      <b-input type="password" v-model.trim="loginForm.password" placeholder="Password" id="loginPass" required />
      <b-button type="submit">Log In</b-button>
      <div class="extras">
        <a @click.prevent="toggleForm" href="" class="font-weight-bold">Create an Account</a>
        <a @click.prevent="togglePasswordReset" href="">Forgot Password</a>
      </div>
    </b-form>

    <!-- Sign Up Form -->
    <b-form v-if="!showLoginForm && !showForgotPassword" @submit.prevent="signup">
      <b-input type="text" v-model.trim="signupForm.name" placeholder="Full Name" id="signupName" required />
      <b-input type="email" v-model="signupForm.email" placeholder="Email" id="signupEmail" required />
      <b-input type="password" v-model="signupForm.password" placeholder="Password" id="signupPass" required />
      <b-button type="submit">Create Account</b-button>
      <div class="extras">
        <a @click.prevent="toggleForm" href="">Back to Log In</a>
      </div>
    </b-form>

    <!-- Forgot Password -->
    <b-form v-if="showForgotPassword" @submit.prevent class="password-reset">
      <div v-if="!passwordResetSuccess">
        <h1>Reset Password</h1>
        <p>We will send you an email to reset your password</p>
        <b-input v-model.trim="passwordForm.email" type="email" placeholder="Email" id="forgotEmail" required />
        <b-button @click="resetPassword" type="button">Submit</b-button>
        <div class="extras">
          <a @click.prevent="togglePasswordReset" href="">Back to Log In</a>
        </div>
      </div>

      <div v-else>
        <h1>Email Sent</h1>
        <p>check your email for a link to reset your password</p>
        <b-button @click="togglePasswordReset" type="button">Back to login</b-button>
      </div>
    </b-form>

    <!-- Loading and Error -->
    <transition name="fade">
      <div v-if="performingRequest" class="loading"></div>
    </transition>

    <transition name="fade">
      <div v-if="errorMsg !== ''" class="error-msg">
        <p>{{ errorMsg }}</p>
      </div>
    </transition>

  </div>
</section>
</template>


<script>
const fb = require('../firebase.js')

export default {
  name: 'login',
  props: ['theme'],
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      passwordForm: {
        email: ''
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false,
      errorMsg: ''
    }
  },
  methods: {
    toggleForm() {
      // Toggle Login/Sign Up forms
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      // Toggle Login/Password reset forms
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    login() {
      // Start loader
      this.performingRequest = true

      // Sign into Firebase
      fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
        // Update currentUser state
        this.$store.commit('setCurrentUser', user.user)
        // Update userProfile state
        this.$store.dispatch('fetchUserProfile')
        this.performingRequest = false
        this.$router.push('/')
      }).catch(err => {
        // Stop loader and set error message
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    signup() {
      // Start loader
      this.performingRequest = true

      // Create new Firebase user
      fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
        // Update currentUser state
        this.$store.commit('setCurrentUser', user.user)

        // Create new user ref in Firebase
        fb.usersCollection.doc(user.user.uid).set({
          name: this.signupForm.name,
          email: this.signupForm.email
        }).then(() => {
          // Update userProfile state
          this.$store.dispatch('fetchUserProfile')
          // Stop loader and route to root
          this.performingRequest = false
          this.$router.push('/')
        }).catch(err => {
          // Stop loader and set error message
          this.performingRequest = false
          this.errorMsg = err.message
        })
      }).catch(err => {
        // Stop loader and set error message
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    resetPassword() {
      // Start loader
      this.performingRequest = true

      // Send password reset email
      fb.auth.sendPasswordResetEmail(this.passwordForm.email).then(() => {
        // Stop loader, set success, clear email
        this.performingRequest = false
        this.passwordResetSuccess = true
        this.passwordForm.email = ''
      }).catch(err => {
        // Stop loader and set error message
        this.performingRequest = false
        this.errorMsg = err.message
      })
    }
  }
}
</script>


<style lang="scss">
//------------------------------------------------------
// Import Variables
//------------------------------------------------------

@import '../Variables.scss';

//------------------------------------------------------
// Centered Form Box
//------------------------------------------------------

.form-box {
    width: 100%;
    max-width: 400px;
    margin: 50px auto;
    padding: 20px 30px;

    img {
        width: 100%;
        margin-bottom: 0;
    }

    h3 {
        text-align: center;
    }

    form {
        position: relative;

        legend {
            text-align: center;
            color: $gray-light;
        }

        .form-control {
            border-radius: $border-radius;
            margin-bottom: 14px;
        }

        small {
            display: block;
            visibility: hidden;
            margin-top: 8px;

            &.active {
                visibility: visible;
                text-align: center;
                width: 100%;
            }
        }

        button {
            display: block;
            width: 100%;
        }

        a {
            display: block;
            text-align: center;

            margin-top: 5px;
            text-decoration: none;

            &:active,
            &:focus,
            &:hover {
                text-decoration: none;
            }
        }

        .extras {
            margin-top: 25px;
            font-size: 0.95em;

            a:first-child {
                font-weigth: 600;
            }
        }

        &.password-reset {
            h1 {
                font-size: 1.3em;
                margin-top: 0;
                text-align: center;
            }
            p {
                text-align: center;
            }
        }
    }
}

// Dark/Light Theme Styles -----------------------------

.dark {
    .form-box {
        a {
            color: $dark-text-color;

            &:active,
            &:focus,
            &:hover {
                color: lighten($dark-text-color, 30%);
            }
        }

        .password-reset {
            h1 {
                color: #fff;
            }
            p {
                color: $dark-text-color;
            }
        }
    }
}

.light {
    .form-box {
        a {
            color: $light-text-color;

            &:active,
            &:focus,
            &:hover {
                color: lighten($light-text-color, 30%);
            }
        }

        .password-reset {
            h1 {
                color: $light-text-color;
            }
            p {
                color: $light-text-color;
            }
        }
    }
}
</style>
