const checkout = {
  _id: '12345',
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: 1,
      name: 'Product 1',
      size: 'M',
      color: 'Red',
      quantity: 1,
      price: 15,
      image: 'https://picsum.photos/150?random=1'
    },
    {
      productId: 2,
      name: 'Product 2',
      size: 'S',
      color: 'Blue',
      quantity: 2,
      price: 30,
      image: 'https://picsum.photos/150?random=2'
    }
  ],
  shippingAddress: {
    address: '123 Main St',
    city: 'Anytown',
    country: 'Canada'
  }
}

const OrderConfirmationPage = () => {
  const CalculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
  }

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
        Thank you for your order!
      </h1>

      {checkout && (
        <div className='p-6 rounded-lg border border-gray-300'>
          <div className='flex justify-between mb-20'>
            {/* order id and date */}
            <div>
              <h2 className='text-xl font-bold'>
                Order ID: {checkout._id}
              </h2>
              <p className='text-gray-600'>
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* estimated delivery date */}
            <div>
              <p className='text-emerald-700 text-sm'>
                Estimated Delivery: {CalculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* ordered items */}
          <div className='mb-20'>
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className='flex items-center mb-4'>
                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-md mr-4' />
                <div>
                  <h4 className='text-md font-semibold'>{item.name}</h4>
                  <p className='text-sm text-gray-600'>{item.color} | {item.size}</p>
                </div>
                <div className='ml-auto text-right'>
                  <p className='text-md'>${item.price}</p>
                  <p className='text-sm text-gray-500'>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          {/* payment and delivery info */}
          <div className='grid grid-cols-2 gap-8'>{/* payment info */}
            <div>
              <h4 className='text-lg font-semibold mb-2'>Payment</h4>
              <p className='text-gray-600'>Paypal</p>
            </div>

            {/* delivery info */}
            <div>
              <h4 className='text-lg font-semibold mb-2'>
                Delivery
              </h4>
              <p className='text-gray-600'>
                {checkout.shippingAddress.address}
              </p>
              <p className='text-gray-600'>
                {checkout.shippingAddress.city}, {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default OrderConfirmationPage
