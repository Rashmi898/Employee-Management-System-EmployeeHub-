import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, EyeOffIcon, EyeIcon } from 'lucide-react'

const LoginFrom = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    if (!email || !password) {
      setError("Please fill all fields")
      return
    }

    try {
      setLoading(true)

      // API call later
      console.log({
        role,
        email,
        password
      })

    } catch (err) {
      setError("Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      
      <LoginLeftSide />

      <div className='flex-1 flex items-center justify-center p-6 sm:p-12 bg-white'>
        <div className='w-full max-w-md animate-fade-in'>

          <Link
            to='/login'
            className='inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors duration-200'
          >
            <ArrowLeftIcon size={16} />
            Back to portals
          </Link>

          <div className='mb-8'>
            <h1 className='text-2xl sm:text-3xl font-medium text-zinc-800'>
              {title}
            </h1>

            <p className='text-slate-500 text-sm sm:text-base mt-2'>
              {subtitle}
            </p>
          </div>

          {error && (
            <div className='mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3'>
              <div className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0'></div>
              {error}
            </div>
          )}

          <form
            className='space-y-5'
            onSubmit={handleSubmit}
          >
            
            {/* Email */}
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>
                Email Address
              </label>

              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                required
                className='w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500'
              />
            </div>

            {/* Password */}
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>
                Password
              </label>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  required
                  className='w-full border border-slate-300 rounded-lg px-4 py-3 pr-16 outline-none focus:border-blue-500'
                />

                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'onClick={() => setShowPassword(!showPassword)}>
                
                  {showPassword ? <EyeOffIcon size={18}/> : <EyeIcon size={18}/>}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              disabled={loading}
              className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50'
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default LoginFrom