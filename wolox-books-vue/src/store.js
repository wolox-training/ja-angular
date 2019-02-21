import Vue from 'vue'
import Vuex from 'vuex'
import { BooksService } from './services/booksService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    getBooks (context) {
      const booksService = new BooksService()
      booksService.getBooks()
        .then(books => {
          context.commit('setBooks', books.data)
        })
    }
  }
})
