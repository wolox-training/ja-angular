import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import NavBar from './views/NavBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: NavBar
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
