import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: SignUp
    }
  ]
})
