import { Platform } from 'react-native'

import ky, { KyInstance } from 'ky'

const getBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3001'
  }
  return 'http://localhost:3001'
}

export class MarketPlaceApiClient {
  private instance: KyInstance

  constructor() {
    this.instance = ky.create({
      prefix: getBaseUrl(),
      timeout: 10000,
      retry: { limit: 2 },
    })
  }

  getInstance() {
    return this.instance
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance()
