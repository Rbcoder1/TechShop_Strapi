import React from 'react'
import ShippingAddress from '../components/checkout/ShippingAddress'
import Payment from '../components/checkout/Payment'
import OrderSummary from '../components/checkout/OrderSummary'

const CheckoutPage = () => {
    return (
        <div className="checkoutcontainer container">
            <div className="row ">
                <div className="col-md-9">
                    {/* <ShippingAddress /> */}
                    <Payment />
                </div>
                <div className="col-md-3">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
