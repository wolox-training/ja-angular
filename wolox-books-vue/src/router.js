import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: { name: 'signUp' }
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import(/* webpackChunkName: "sign-up" */ './views/SignUp.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import(/* webpackChunkName: "sign-in" */ './views/SignIn.vue')
    }
  ]
})
