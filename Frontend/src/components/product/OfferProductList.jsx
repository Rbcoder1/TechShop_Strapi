import React, { useContext } from 'react'

const OfferProductList = (props) => {
    return (
        <div style={{ paddingTop: "70px" }} className="container">
            <h1>{props.title}</h1>

            <div className="row row-cols-1 row-cols-md-4 g-5">
                {/* {
                    offerProducts.product.map((e) => {
                        return <TempProduct key={e._id} label={e.label} title={e.title} desc={e.description} price={e.price} />
                    })
                } */}
            </div>
        </div>
    )
}

export default OfferProductList
