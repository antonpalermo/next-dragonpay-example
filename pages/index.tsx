import React from 'react'
import { generateUniqueTransactionID } from '../utils/txnId'

const Index = () => {
  return <h1>{generateUniqueTransactionID()}</h1>
}

export default Index
