import React from 'react';
import "./App.css"

const App = () => {
  return (
    <div>

      {/* Navbar */}
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li><a href="">MENU</a></li>
          <li><a href="">LOCATION</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>

        <button>Login</button>
      </nav>

      {/* Main */}
      <main>
        <div className="container">
          <div className='text'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          </div>
          <div className='image'>
            <img src="/images/shoe_image.png" alt="" srcset="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
