import { useEffect, useState, useRef } from 'react'
import { FaFilter } from 'react-icons/fa'
import FilterSidebar from '../components/products/FilterSidebar'
import SortOption from '../components/products/SortOption'
import ProductGrid from '../components/products/ProductGrid'

const CollectionPages = () => {
  const [products, setProducts] = useState([])
  const sidebarRef = useRef(null)
  const buttonRef = useRef(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    // Simulación de fetch de productos
    setTimeout(() => {
      const fetchedProducts = [
        // ...lista de productos...
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
        },
        {
          _id: 7,
          name: 'product 7',
          price: 99.99,
          images: [
            {
              url: 'https://picsum.photos/500/500?random=6',
              altText: 'Product 7'
            }
          ]
        },
        {
          _id: 8,
          name: 'product 8',
          price: 99.99,
          images: [
            {
              url: 'https://picsum.photos/500/500?random=6',
              altText: 'Product 8'
            }
          ]
        }
      ]
      setProducts(fetchedProducts)
    }, 1000)
  }, [])

  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Botón de filtro en mobile */}
      <button
        ref={buttonRef}
        onClick={toggleSidebar}
        className='lg:hidden border p-2 flex justify-center items-center'
      >
        <FaFilter className='mr-2' /> Filters
      </button>
      {/* Sidebar de filtros */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className='flex-grow p-4'>
        <h2 className='text-2xl uppercase mb-4'>All Collections</h2>

        {/* sort options */}
        <SortOption />

        {/* product grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

export default CollectionPages
