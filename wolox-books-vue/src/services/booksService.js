import { api } from '../config/api'

export class BooksService {
  getBooks () {
    return api.get('/books')
  }

  getBook (bookId) {
    return this.api.get(`/${bookId}`)
  }
}
