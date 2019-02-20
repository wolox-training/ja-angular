import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: () => import(/* webpackChunkName: "sign-up" */ './views/SignUp.vue')
    }
  ]
})
