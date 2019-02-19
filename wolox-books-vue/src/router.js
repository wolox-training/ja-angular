import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'

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
      component: SignUp
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: SignIn
    }
  ]
})
