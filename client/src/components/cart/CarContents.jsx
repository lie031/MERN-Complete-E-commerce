import { RiDeleteBin3Line } from 'react-icons/ri'
const CarContents = () => {
  const cartProducts = [
    {
      productId: 1,
      productName: 'Product 1',
      size: 'M',
      color: 'Red',
      quantity: 1,
      price: 15,
      image: 'https://picsum.photos/200?random=1'
    },
    {
      productId: 2,
      productName: 'Product 2',
      size: 'L',
      color: 'Blue',
      quantity: 2,
      price: 20,
      image: 'https://picsum.photos/200?random=2'
    },
    {
      productId: 3,
      productName: 'Product 3',
      size: 'S',
      color: 'Green',
      quantity: 3,
      price: 10,
      image: 'https://picsum.photos/200?random=3'
    },
    {
      productId: 4,
      productName: 'Product 4',
      size: 'XL',
      color: 'Yellow',
      quantity: 4,
      price: 25,
      image: 'https://picsum.photos/200?random=4'
    },
    {
      productId: 5,
      productName: 'Product 5',
      size: 'XXL',
      color: 'Purple',
      quantity: 5,
      price: 30,
      image: 'https://picsum.photos/200?random=5'
    },
    {
      productId: 6,
      productName: 'Product 6',
      size: 'XXL',
      color: 'Purple',
      quantity: 5,
      price: 30,
      image: 'https://picsum.photos/200?random=6'
    },
    {
      productId: 7,
      productName: 'Product 7',
      size: 'XXL',
      color: 'Purple',
      quantity: 5,
      price: 30,
      image: 'https://picsum.photos/200?random=7'
    }
  ]
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className='flex items-start justify-between py-4 border-b'
        >
          <div className='flex items-start'>
            <img
              src={product.image}
              alt={product.productName}
              className='w-20 h-24 object-cover mr-4 rounded'
            />
            <div>
              <h3>{product.productName}</h3>
              <p className='text-sm text-gray-500'>
                Size: {product.size} | Color: {product.color}
              </p>
              <div className='flex items-center mt-2'>
                <button className='border rounded px-2 py-1 text-xl font-medium border-gray-500'>
                  -
                </button>
                <span className='mx-4'>{product.quantity}</span>
                <button className='border rounded px-2 py-1 text-xl font-medium border-gzray-500'>
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>$ {product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-700' />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CarContents
