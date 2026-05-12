import { marketPlaceApiClient } from './api/market-place'
import { RegisterHttpParams, RegisterHttpResponse } from './interfaces/http/register'

export const register = async (userData: RegisterHttpParams) => {
  const data = await marketPlaceApiClient
    .post('auth/register', { json: userData })
    .json<RegisterHttpResponse>()

  return data
}
