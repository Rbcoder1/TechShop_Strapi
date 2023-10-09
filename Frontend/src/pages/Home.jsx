import React from 'react'
import ScrollingProducts from '../components/product/ScrollingProducts'
import '../assets/Style/Home.css'
import ScrollingCategory from '../components/product/ScrollingCategory'
import AllProduct from '../components/product/AllProduct'

const Home = () => {
  return (
    <div style={{ 'marginTop': '70px', 'padding': '10px 20px' }} >
      <div className="best-selling-conn">
        <h3 className='heading-best-selling'>Best Selling</h3>
        <h6 className='sub-heading'>Top Selling With 5 Start Product Listed For You <a href="#" style={{ 'fontWeight': 'bold', 'color': 'black', 'marginBottom': '10px' }}>See All</a></h6>
        <ScrollingProducts />
      </div>
      <div className="product-category my-3">
        <h3 className="heading-product-category mt-4">Product Category</h3>
        <h6 className='sub-heading'>Explore Your Favorite Category </h6>
        <ScrollingCategory />
      </div>
      <div className="product-category my-3">
        <h3 className="heading-new-product mt-4">New Product For Sell</h3>
        <h6 className='sub-heading'>Buy Some Innovative Product From Here</h6>
        <ScrollingProducts />
      </div>
      <div className="all-product-list">
        <h3 className="heading-new-product mt-4">All Products</h3>
        <h6 className='sub-heading'>Shop Products You Want</h6>
        <AllProduct />
      </div>
    </div>
  )
}

export default Home
