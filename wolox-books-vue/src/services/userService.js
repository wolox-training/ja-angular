import { create } from 'apisauce'

export class UserService {
  api = create({ baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1' })

  createUser (user) {
    return this.api.post('/users', user)
  }

  signIn (email, password) {
    const session = {
      session: {
        email: email,
        password: password
      }
    }

    return this.api.post('sessions', session)
  }
}
