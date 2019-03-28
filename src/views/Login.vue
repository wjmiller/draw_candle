<template>
<div id="login">
  <section>
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
</div>
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
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
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
      this.performingRequest = true

      fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
        // update currentUser state
        this.$store.commit('setCurrentUser', user.user)
        // update userProfile
        this.$store.dispatch('fetchUserProfile')
        this.performingRequest = false
        this.$router.push('/')
      }).catch(err => {
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    signup() {
      this.performingRequest = true

      fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(user => {
        // update currentUser state
        this.$store.commit('setCurrentUser', user.user)

        // create new user ref in firebase
        fb.usersCollection.doc(user.user.uid).set({
          name: this.signupForm.name,
          email: this.signupForm.email
        }).then(() => {
          this.$store.dispatch('fetchUserProfile')
          this.performingRequest = false
          this.$router.push('/')
        }).catch(err => {
          this.performingRequest = false
          this.errorMsg = err.message
        })
      }).catch(err => {
        this.performingRequest = false
        this.errorMsg = err.message
      })
    },
    resetPassword() {
      this.performingRequest = true

      fb.auth.sendPasswordResetEmail(this.passwordForm.email).then(() => {
        this.performingRequest = false
        this.passwordResetSuccess = true
        this.passwordForm.email = ''
      }).catch(err => {
        this.performingRequest = false
        this.errorMsg = err.message
      })
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../Variables.scss';

#app {
    padding-top: 40px;
}

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

.dark {
    .form-box {
        a {
            color: $text-color-dark;

            &:active,
            &:focus,
            &:hover {
                color: lighten($text-color-dark, 30%);
            }
        }

        .password-reset {
            h1 {
                color: #fff;
            }
            p {
                color: $text-color-dark;
            }
        }
    }
}

.light {
    .form-box {
        a {
            color: $text-color-light;

            &:active,
            &:focus,
            &:hover {
                color: lighten($text-color-light, 30%);
            }
        }

        .password-reset {
            h1 {
                color: $text-color-light;
            }
            p {
                color: $text-color-light;
            }
        }
    }
}
</style>
