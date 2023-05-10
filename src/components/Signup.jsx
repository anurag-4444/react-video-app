import React from 'react'
import '../styles/signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='loginn'>
        <div className='onee'>
            <h1>Welcome Back</h1>
            <form className='Form'>
            
                <input type="text" name="text" id="text" placeholder='Name' required/>
                <input type="email" name="email" id="email" placeholder='Email' required/>
                <input type="password" name="password" id="password" placeholder='Password' required/>
                
                <button>Log In</button>
                <Link className='link beforeLogin' to={'/login'}>Log In</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup