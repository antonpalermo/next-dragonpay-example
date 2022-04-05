export const generateUniqueTransactionID = () => {
  return '0xABC' + Math.floor(Math.random() * Date.now())
}
