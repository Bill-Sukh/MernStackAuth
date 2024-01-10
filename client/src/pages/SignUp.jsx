import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const handleFormData = e => {
    // Using spread syntax here to concatenate current input key, value to previous formData object
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) 
    })
    const responseData = await res.json()
    console.log(responseData)
  }

  console.log(formData)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold text-3xl my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          className='bg-slate-100 p-3 rounded-lg'
          type='text'
          placeholder='Username'
          id='username'
          onChange={handleFormData}
        />
        <input
          className='bg-slate-100 p-3 rounded-lg'
          type='email'
          placeholder='Email'
          id='email'
          onChange={handleFormData}
        />
        <input
          className='bg-slate-100 p-3 rounded-lg'
          type='password'
          placeholder='Password'
          id='password'
          onChange={handleFormData}
        />
        <button
          className='bg-slate-700 text-white rounded-lg uppercase p-3 
          hover:opacity-95 disabled:opacity-80'
        >
          Sign Up
        </button>
        <div className='flex gap-2 mt-5'>
          <p>Have an account</p>
          <Link to='/sign-in'>
            <span className='text-blue-500'>Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  )
}
