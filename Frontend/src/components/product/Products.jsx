import React, { useEffect, useContext } from 'react'
import '../App.css'

const Products = () => {
    return (
        <div className="card flex-column mx-2 my-2">
            <div className="card justify-content-center p-4">
                <h2>All Products</h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {/* {product.map((e) => {
                        return <TempProduct key={e._id} label={e.label} title={e.title} desc={e.description} price={e.price} />
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default Products
