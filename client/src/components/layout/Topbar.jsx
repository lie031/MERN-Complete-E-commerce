import { TbBrandMeta } from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'

function Topbar () {
  return (
    <div className='bg-red text-white'>
      <div className='container mx-auto flex justify-between items-center py-2 px-4'>
        <div className='hidden md:flex items-center space-x-2'>
          <a href='#' className='hover:text-gray-300'>
            <TbBrandMeta className='h-5 w-5' />
          </a>
          <a href='#' className='hover:text-gray-300'>
            <IoLogoInstagram className='h-5 w-5' />
          </a>
          <a href='#' className='hover:text-gray-300'>
            <RiTwitterXLine className='h-4 w-4' />
          </a>
        </div>
        <div className='text-sm text-center flex-grow'>
          <span>We ship worldwide - free shipping on all orders over $100</span>
        </div>
        <div className='text-sm hidden md:block'>
          <a href='tel:123456789' className='hover:text-gray-300'>
            Call us: 123-456-789
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
