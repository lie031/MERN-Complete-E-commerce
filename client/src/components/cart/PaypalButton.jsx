/* eslint-disable react/prop-types */
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const PaypalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider options={{ 'client-id': 'AU1H9eJu9XoxGY19fifcwX_eE0fhEjn1qgFXjmA36ZVahKJSW9SCTverIxdnerxHIjXak4RzuqnPYLVM' }}>
      <PayPalButtons
        style={{ layout: 'vertical' }} createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount
                }
              }
            ]
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
