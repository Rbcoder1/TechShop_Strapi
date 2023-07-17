import React from 'react'
import ScrollingProducts from '../components/ScrollingProducts'
import '../Style/Home.css'
import ScrollingCategory from '../components/ScrollingCategory'

const Home = () => {
  return (
    <div style={{ 'marginTop': '70px', 'padding': '10px 20px' }} >
      <div className="best-selling-conn">
        <h3 className='heading-best-selling'>Best Selling</h3>
        <span className='sub-heading-selling'>Top Selling With 5 Start Product Listed For You <a href="#" className='mx-2' style={{'fontWeight':'bold','color':'black'}}>See All</a></span>
        <ScrollingProducts />
      </div>
      <div className="product-category my-3">
        <h3 className="heading-product-category mt-4">Product Category</h3>
        <span className='sub-heading'>Explore Your Favorite Category </span>
        <ScrollingCategory />
      </div>
    </div>
  )
}

export default Home
