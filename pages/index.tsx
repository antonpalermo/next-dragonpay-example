import React from 'react'

import { Form, Formik, FormikHelpers } from 'formik'
import { useRouter } from 'next/router'

type PaymentDetails = {
  amount: number
  email: string
  currency: string
  description: string
}

const Index = () => {
  const router = useRouter()

  const initialData: PaymentDetails = {
    amount: 1.0,
    email: '',
    currency: 'PHP',
    description: 'Payment Sample'
  }

  const handleSubmit = async (
    values: PaymentDetails,
    helpers: FormikHelpers<PaymentDetails>
  ) => {
    const requestPayment = await fetch('/api/collect', {
      method: 'POST',
      body: JSON.stringify(values)
    })

    const response = await requestPayment.json()

    // redirect the user to the payment selection page.
    router.push(response?.Url)
  }

  return (
    <>
      <h1>Request a payment</h1>
      <Formik initialValues={initialData} onSubmit={handleSubmit}>
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="amount">amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                value={values.amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ccy">currency</label>
              <input
                type="text"
                name="ccy"
                id="ccy"
                value={values.currency}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description">description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Index
