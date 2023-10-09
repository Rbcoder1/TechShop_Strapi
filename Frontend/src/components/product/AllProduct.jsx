import React from 'react'
import SingleProduct from '../product/SingleProduct'

const AllProduct = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
                <div className="col">
                    <SingleProduct />
                </div>
            </div>
        </div>
    )
}

export default AllProduct
