import React from 'react'
import ScrollingProducts from '../components/ScrollingProducts'
import '../Style/Home.css'

const Home = () => {
  return (
    <div style={{ 'marginTop': '70px', 'padding': '10px 20px' }} >
      <div className="best-selling-conn">
        <h3 className='heading-best-selling'>Best Selling</h3>
        <span className='sub-heading-selling'>Everything That Trends Listed Here</span>
        <ScrollingProducts />
      </div>
    </div>
  )
}

export default Home
