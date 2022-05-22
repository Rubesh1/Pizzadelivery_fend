import React from 'react'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <img className="home_image" src="./home.jpg" alt="" />
        <Product/>       
    </div>
  )
}

export default Home