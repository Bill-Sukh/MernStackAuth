import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold text-3xl my-7'>
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
        <input
          className='bg-slate-100 p-3 rounded-lg'
          type='text'
          placeholder='Username'
          id=''
        />
        <input
          className='bg-slate-100 p-3 rounded-lg'
          type='email' 
          placeholder='Email'
        />
        <input s
          className='bg-slate-100 p-3 rounded-lg'
          type='password' 
          placeholder='Password' 
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
