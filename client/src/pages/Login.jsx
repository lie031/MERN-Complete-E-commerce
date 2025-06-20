import { useState } from 'react'
import { Link } from 'react-router-dom'
import login from '../assets/login.webp'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('user Login', { email, password })
  }

  return (
    <div className='flex'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form
          className='w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 shadow-lg'
          onSubmit={handleSubmit}
        >
          <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>ShopSphere</h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'>hey there!</h2>
          <p className='text-center mb-6'>
            Enter your username and password to Login
          </p>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg'
              placeholder='Enter your email address'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg'
              placeholder='Enter your email password'
            />
          </div>
          <button className='w-full bg-black text-white rounded-lg font-semibold p-2 hover:bg-gray-800 transition'>
            Sign In
          </button>
          <p className='mt-6 text-center text-sm'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-blue-500'>Register</Link>
          </p>
        </form>
      </div>

      <div className='hidden md:block w-1/2 bg-gray-800'>
        <div className='h-full flex flex-col justify-center items-center'>
          <img src={login} alt='login-img' className='w-full h-[600px] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Login
