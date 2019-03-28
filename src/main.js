import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './App.scss'
import router from './router'
import {
  store
} from './store.js'
const fb = require('./firebase.js')

Vue.config.productionTip = false

// handle page reloads
let app;

fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
})
