import Topbar from '../layout/Topbar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      {/* topbar */}
      <Topbar />
      {/* navbar */}
      <NavBar />
      {/* car drawer */}
    </header>
  )
}

export default Header
