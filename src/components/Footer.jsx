import React from 'react'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="one">
            <h3>subscribe to get updates</h3>
            <div className="childOne">
            <input type="text" placeholder='Enter Email Here...'/>
            <div className='outline'></div>
            </div>
        </div>
        <div className="line"></div>
        <div className="two">
            <h1>video hub</h1>
            <p>All rights reserved &copy;</p>
        </div>
        <div className="line"></div>
        <div className="three">
            <h3>SOCIAL MEDIA</h3>
            <a href="https://www.youtube.com">Youtube</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.github.com">Github</a>

        </div>
    </footer>
  )
}

export default Footer