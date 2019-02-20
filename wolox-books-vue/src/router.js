import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './views/SignUp.vue'
import SignIn from './views/SignIn.vue'
import Auth from './views/auth/Auth.vue'
import BookList from './views/auth/screens/bookList/BookList.vue'
import BookDetail from './views/auth/screens/bookDetail/BookDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: { name: 'bookList' },
      name: 'home',
      component: Auth,
      children: [
        {
          path: '/books',
          name: 'bookList',
          component: BookList
        },
        {
          path: '/books/:id',
          name: 'bookDetail',
          component: BookDetail
        }
      ]
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
