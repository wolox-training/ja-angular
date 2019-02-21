import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import { messages } from './locale/translations'

Vue.use(Vuelidate)
Vue.use(VueI18n)

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
