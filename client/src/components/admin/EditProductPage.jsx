import { useState } from 'react'

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    countInStock: 0,
    sku: '',
    category: '',
    image: '',
    brand: '',
    sizes: [],
    colors: [],
    collections: '',
    material: '',
    gender: '',
    images: [
      {
        url: 'https://picsum.photos/150?random=1'
      },
      {
        url: 'https://picsum.photos/150?random=2'
      }
    ]
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    console.log(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Product data:', productData)
  }

  return (
    <div className='max-w-5xl mx-auto p-6 shadow rounded-md'>
      <h2 className='text-3xl font-bold mb-6'>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Product Name</label>
          <input
            type='text'
            name='name'
            value={productData.name}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Description</label>
          <textarea
            name='description'
            value={productData.description}
            className='border border-gray-300 rounded-md p-2 w-full'
            rows={4}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Price</label>
          <input
            type='number'
            name='price'
            value={productData.price}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={handleChange}
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Count in Stock</label>
          <input
            type='number'
            name='countInStock'
            value={productData.countInStock}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={handleChange}
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>SKU</label>
          <input
            type='number'
            name='sku'
            value={productData.sku}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={handleChange}
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Sizes (coma-separated)</label>
          <input
            type='text'
            name='sizes'
            value={productData.sizes.join(', ')}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={(e) => {
              setProductData((prevData) => ({
                ...prevData,
                sizes: e.target.value.split(',').map((size) => size.trim().toUpperCase())
              }))
            }}
          />
        </div>

        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Colors (coma-separated)</label>
          <input
            type='text'
            name='colors'
            value={productData.colors.join(', ')}
            className='border border-gray-300 rounded-md p-2 w-full'
            onChange={(e) => {
              setProductData((prevData) => ({
                ...prevData,
                colors: e.target.value.split(',').map((color) => color.trim())
              }))
            }}
          />
        </div>

        {/* image upload */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Upload Image</label>
          <input type='file' onChange={handleImageUpload} />
          <div className='flex gap-4 mt-4'>
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || 'Product Image'}
                  className='w-20 h-20 object-cover rounded-md shadow'
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type='submit'
          className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors '
        > Update Product
        </button>

      </form>
    </div>
  )
}

export default EditProductPage
