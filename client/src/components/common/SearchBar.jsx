import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('search term:', searchTerm)
    setIsOpen(false)
  }

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 'absolute top-0 left-0 w-full bg-white h-26 z-50' : 'w-full'}`}>
      {isOpen
        ? (
          <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
            <div className='relative w-1/2'>
              <input
                type='text'
                placeholder='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700'
              />
              {/* search icon */}
              <button type='submit' className='absolute top-1/2 -translate-y-1/2 right-2 text-gray-600 hover:text-gray-800'>
                <HiMagnifyingGlass className='h-6 w-6 cursor-pointer' />
              </button>
            </div>
            {/* close button */}
            <button
              type='button'
              className='absolute top-1/2 -translate-y-1/2 right-4 text-gray-600 hover:text-gray-800 cursor-pointer'
              onClick={handleSearchToggle}
            >
              <HiMiniXMark className='h-6 w-6' />
            </button>
          </form>
          )
        : (
          <button onClick={handleSearchToggle}>
            <HiMagnifyingGlass className='h-6 w-6 cursor-pointer' />
          </button>
          )}
    </div>
  )
}

export default SearchBar
