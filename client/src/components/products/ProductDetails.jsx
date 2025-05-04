import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import ProductGrid from './ProductGrid'
const selectedProduct = {
  name: 'Sweater',
  price: 99.99,
  originalPrice: 199.99,
  description: 'A cozy sweater for your summer days',
  brand: 'Brand A',
  material: 'Cotton',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Red', 'Blue', 'Green'],
  images: [
    {
      url: 'https://picsum.photos/500/500?random=1',
      altText: 'Product 1'
    },
    {
      url: 'https://picsum.photos/500/500?random=2',
      altText: 'Product 2'
    },
    {
      url: 'https://picsum.photos/500/500?random=3',
      altText: 'Product 3'
    },
    {
      url: 'https://picsum.photos/500/500?random=4',
      altText: 'Product 4'
    },
    {
      url: 'https://picsum.photos/500/500?random=5',
      altText: 'Product 5'
    }
  ]
}
const similarProducts = [
  {
    _id: 1,
    name: 'product 1',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=1',
        altText: 'Product 1'
      }
    ]
  },
  {
    _id: 2,
    name: 'product 2',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=2',
        altText: 'Product 2'
      }
    ]
  },
  {
    _id: 3,
    name: 'product 3',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=3',
        altText: 'Product 3'
      }
    ]
  },
  {
    _id: 4,
    name: 'product 4',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=4',
        altText: 'Product 4'
      }
    ]
  },
  {
    _id: 5,
    name: 'product 5',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=5',
        altText: 'Product 5'
      }
    ]
  },
  {
    _id: 6,
    name: 'product 6',
    price: 99.99,
    images: [
      {
        url: 'https://picsum.photos/500/500?random=6',
        altText: 'Product 6'
      }
    ]
  }
]

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(undefined)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const handleQuantityChange = (value) => {
    if (value === -1) {
      setQuantity(Math.max(1, quantity - 1))
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select a size and color', {
        duration: 1000
      })
      return
    }

    setIsButtonDisabled(true)
    setTimeout(() => {
      toast.success('Product added to cart', {
        duration: 1000
      })
      setIsButtonDisabled(false)
    }, 500)
  }

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url)
    }
  }, [])

  return (
    <div className='p-6'>
      <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
        <div className='flex flex-col md:flex-row'>

          {/* left - tumbnails */}
          <div className='hidden md:flex flex-col space-y-4 mr-6'>
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || `Thumbnail ${index + 1}`}
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border  ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* main image */}
          <div className='md:w-1/2'>
            <div className='mb-4'>
              <img
                src={mainImage}
                alt='Main Product Image'
                className='w-full h-auto object-cover rounded-lg'
              />
            </div>
          </div>

          {/* mobile tumbnails */}
          <div className='md:hidden flex overflow-x-scroll overflow-auto scrollbar-hide space-x-2 mb-4 '>
            {selectedProduct.images.map((image, index) => (
              <img
                src={image.url}
                alt={image.altText || `Thumbnail ${index + 1}`}
                key={index}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border  ${mainImage === image.url ? 'border-black' : 'border-gray-300'}`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* right - details */}
          <div className='md:w-1/2 ml-10'>
            <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
              {selectedProduct.name}
            </h1>
            <p className='text-lg text-gray-600 mb-1 line-through'>
              ${selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
            </p>
            <p className='text-xl text-gray-500 mb-2'>
              ${selectedProduct.price}
            </p>
            <p className='text-gray-600 mb-4'>
              {selectedProduct.description}
            </p>

            <div className='mb-4'>
              <p className='text-gray-700'>Color:</p>
              <div className='flex gap-2 mt-2'>
                {}
                {selectedProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${selectedColor === color ? 'border-3 border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color.toLocaleLowerCase(), filter: 'brightness(0.8)' }}
                    onClick={() => setSelectedColor(color)}
                  />

                ))}
              </div>
            </div>

            <div className='mb-4'>
              <p className='text-gray-700'>Size:</p>
              <div className='flex gap-2 mt-2'>
                {selectedProduct.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 border border-gray-300 rounded-md cursor-pointer ${selectedSize === size ? 'bg-gray-200' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='mb-6'>
              <p className='text-gray-700'>Quantity:</p>
              <div className='flex items-center space-x-4 mt-2'>
                <button onClick={() => handleQuantityChange(-1)} className='px-2 py-1 bg-gray-200 rounded text-lg '>
                  -
                </button>
                <span className='text-lg'>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className='px-2 py-1 bg-gray-200 rounded text-lg '>
                  +
                </button>
              </div>
            </div>

            <button
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded-lg w-full mb-2 ${isButtonDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-800 '}`}
              onClick={handleAddToCart}
            >
              {isButtonDisabled ? 'Adding...' : 'Add to cart'}
            </button>

            <div className='mt-10 text-gray-700'>
              <h3 className='text-xl font-bold mb-4'>
                Characteristics:
              </h3>
              <table className='w-full text-left text-sm text-gray-600'>
                <tbody>
                  <tr>
                    <td className='py-1'>Brand</td>
                    <td className='py-1'>{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className='py-1'>Material</td>
                    <td className='py-1'>{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <div className='mt-20'>
          <h2 className='text-2xl text-center font-medium mb-4'>
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
