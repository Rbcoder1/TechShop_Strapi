import React from 'react'
import SingleProduct from './SingleProduct'

const AllProduct = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
            </div>
        </div>
    )
}

export default AllProduct
