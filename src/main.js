import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './App.scss'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')