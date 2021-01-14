import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '../firebase'

Vue.config.productionTip = false

// error 전역처리
Vue.config.errorHandler = e => {
  console.log(e.message)
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
