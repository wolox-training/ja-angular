import { create } from 'apisauce'
import { LocalStorageService } from '../services/localStorageService'

const localStorageService = new LocalStorageService()
const token = localStorageService.getValue(localStorageService.SESSION_TOKEN)

export const api = create(
  {
    baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1',
    headers: { authorization: `bearer ${token}` }
  })
