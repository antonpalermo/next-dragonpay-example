// basically saying that if NODE_ENV is in prod will send the request on live server
export const __dp_baseURL = `https://${
  process.env.NODE_ENV === 'production' ? 'gw' : 'test'
}.dragonpay.ph/api/collect/v1`
