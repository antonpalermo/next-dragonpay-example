import { NextApiRequest, NextApiResponse } from 'next'
import { __dp_baseURL } from '../../utils/constants'
import { encodeToBase64String } from '../../utils/token'
import { generateUniqueTransactionID } from '../../utils/txnId'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const request = await fetch(
      `${__dp_baseURL}/${generateUniqueTransactionID()}/post`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encodeToBase64String(
            `${process.env.DRAGONPAY_MID}:${process.env.DRAGONPAY_PASSWORD}`
          )}`
        },
        body: req.body
      }
    )
    const response = await request.json()

    return res.status(200).send(response)
  } else {
    // If we recieved any methods other than POST we'll return media type not supported.
    return res.status(415).send({
      message: 'Method not supported on /api/collect expecting post request'
    })
  }
}

export default handler
