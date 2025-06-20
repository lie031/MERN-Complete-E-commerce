import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='border-t py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>

        {/* newsletter */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
          <p className='text-gray-500 mb-4'>
            be the first to heard about new products and special offers
          </p>
          <p className='font-medium text-sm text-gray-600 mb-6'>Sign up and get 20% off your first order</p>
          {/* Newsletter form */}
          <form className='flex'>
            <input
              type='email'
              placeholder='enter your email'
              className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
              required
            />
            <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>Subscribe</button>
          </form>
        </div>

        {/* shop links */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Men&apos;s Top Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Women&apos;s Top Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Men&apos;s Bottom Wear</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Women&apos;s Bottom Wear</Link>
            </li>
          </ul>
        </div>

        {/* help links */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
          <ul className='space-y-2 text-gray-600'>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Contact us</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>About us</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>FAQs</Link>
            </li>
            <li>
              <Link to='#' className='hover:text-gray-500 transition-colors'>Features</Link>
            </li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className='text-lg text-gray-800 mb-4'>Follow us</h3>
          <div className='flex items-center space-x-4 mb-6'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel=' noopener noreferrer'
              className='hover:text-gray-500'
            >
              <TbBrandMeta className='h-6 w-6 transition-colors' />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel=' noopener noreferrer'
              className='hover:text-gray-500'
            >
              <IoLogoInstagram className='h-6 w-6 transition-colors' />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel=' noopener noreferrer'
              className='hover:text-gray-500'
            >
              <RiTwitterXLine className='h-5 w-5 transition-colors' />
            </a>
          </div>
          <p className='text-gray-500'>Call us</p>
          <p>
            <FiPhoneCall className='inline-block mr-2' />
            0123-456-789
          </p>
        </div>
      </div>
      {/* copyright */}
      <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
        <p className='text-center text-sm text-gray-500 tracking-tighter'>
          &copy; 2025 ShopSphere. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
