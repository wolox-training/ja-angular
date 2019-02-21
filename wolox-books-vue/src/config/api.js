import { create } from 'apisauce'
import { LocalStorageService } from '../services/localStorageService'

const localStorageService = new LocalStorageService()
const token = localStorageService.getValue(localStorageService.SESSION_TOKEN)

export const api = create(
  {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: { authorization: `bearer ${token}` }
  })
