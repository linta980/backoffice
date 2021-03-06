import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
