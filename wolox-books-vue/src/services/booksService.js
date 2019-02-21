import { api } from '../config/api'

export class BooksService {
  getBooks () {
    return api.get('/books')
  }
}
