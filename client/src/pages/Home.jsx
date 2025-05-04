import Hero from '../components/layout/Hero'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeaturedSection from '../components/products/FeaturedSection'
import GenderCollectionSection from '../components/products/GenderCollectionSection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/ProductGrid'

const placeholderPoducts = [
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

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* best sellers */}
      <h2 className='text-3xl text-center font-bold mb-4'>Best Sellers</h2>
      <ProductDetails />

      <div className='container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderPoducts} />
      </div>

      <FeaturedCollection />
      <FeaturedSection />

    </div>
  )
}

export default Home
