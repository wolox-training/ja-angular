import { create } from 'apisauce'

export class UserService {
  api = create({ baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1' })

  createUser (user) {
    return this.api.post('/users', user)
  }
}
