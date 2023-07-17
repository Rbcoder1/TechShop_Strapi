import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/ProductCategory.css'

const ProductCategory = () => {
    return (
        <div className='con'>
            <div className="p-card">
                <div className="p-thumb">
                    <img src="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70" alt="" />
                </div>
                <div className="p-details">
                    <h3><Link to="" >Laptop</Link></h3>
                    <a href="#">Shop Now</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory
