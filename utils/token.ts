import { Buffer } from 'buffer'

export const encodeToBase64String = (payload: string) => {
  const buffer = Buffer.from(payload, 'utf-8')
  return buffer.toString('base64')
}
