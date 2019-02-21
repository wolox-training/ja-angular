import { create } from 'apisauce'
import { LocalStorageService } from './localStorageService'

export class BooksService {
  localStorageService = new LocalStorageService()
  token = this.localStorageService.getValue(this.localStorageService.SESSION_TOKEN)

  api = create(
    {
      baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
      headers: { authorization: `bearer ${this.token}` }
    })

  getBooks () {
    return this.api.get('/books')
  }
}
