import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='loginn'>
        <div className='onee'>
            <h1>Welcome Back</h1>
            <form className='Form'>
                <input type="email" name="email" id="email" placeholder='Email' required/>
                <input type="password" name="password" id="password" placeholder='Password' required/>
                <Link className='link' to={'/forgetpassword'}>Forget Password?</Link>
                <button>Log In</button>
                <Link className='link signup' to={'/signup'}>Sign Up</Link>
            </form>
        </div>
    </div>
  )
}

export default Login