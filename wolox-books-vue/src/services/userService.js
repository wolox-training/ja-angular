import { create } from 'apisauce'

export class UserService {
  api = create({ baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/users' })

  createUser (user) {
    return this.api.post('', user)
  }
}
