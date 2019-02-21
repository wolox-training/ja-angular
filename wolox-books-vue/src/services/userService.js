import { api } from '../config/api'

export class UserService {
  createUser (user) {
    return api.post('/users', user)
  }

  signIn (email, password) {
    const session = {
      session: {
        email: email,
        password: password
      }
    }

    return api.post('/users/sessions', session)
  }
}
