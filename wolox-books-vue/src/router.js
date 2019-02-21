import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: { name: 'bookList' },
      name: 'home',
      component: () => import(/* webpackChunkName: "auth" */ './views/auth/Auth.vue'),
      children: [
        {
          path: 'books',
          name: 'bookList',
          component: () => import(/* webpackChunkName: "book-list" */ './views/auth/screens/bookList/BookList.vue')
        }
      ]
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
