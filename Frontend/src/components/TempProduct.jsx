import React from 'react'
import '../Style/TempProduct.css'
import { Link } from 'react-router-dom';

const tempproduct = (props) => {
    const { title, price, label, userId } = props;
    return (
        <div className="con">
            <div className="product-card">
                <div className="badge">{label}</div>
                <div className="product-tumb">
                    <img src="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70" alt="" />
                </div>
                <div className="product-details flex-column">
                    <h4><Link to={"/product-details/" + userId}>{title}</Link></h4>
                    <p>${price} only</p>
                    <Link to="">Explore More</Link>
                </div>
            </div>
        </div>
    )
}

export default tempproduct
