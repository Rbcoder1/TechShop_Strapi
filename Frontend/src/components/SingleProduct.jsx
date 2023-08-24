
import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/SingleProduct.css'
import '../Style/ScrollingProduct.css'

const SingleProduct = () => {
    return (
        <div className="con">
            <div className="product-card">
                <div className="product-tumb">
                    <img src="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70" alt="" />
                </div>
                <div className="product-details flex-column">
                    <h4><Link to="" >Laptop</Link></h4>
                    <p>$500 only</p>
                    <Link to="/single_product">Explore More</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
