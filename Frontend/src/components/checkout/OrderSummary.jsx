import React from 'react'

const OrderSummary = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center cartheading-con">
                <div className="cart-heading heading cart-bill-heading"><h5>Order Summary</h5></div>
                <div className="cart-amount-count"><p>(2)items</p></div>
            </div>
            <div className="bill-content">
                <ul className='bill-shiping'>
                    <li>
                        <div className="pricedetail d-flex justify-content-between my-3">
                            <p>Price (1 item):</p>
                            <b>13000</b>
                        </div>
                    </li>
                    <li>
                        <div className="dcharge d-flex justify-content-between my-3">
                            <p>Dilivery Charges :</p>
                            <b>FREE</b>
                        </div>
                    </li>
                    <li>
                        <div className="packcharge d-flex justify-content-between my-3">
                            <p>Packaging Charges :</p>
                            <b>120</b>
                        </div>
                    </li>
                </ul>
                <div className="total-amount">
                    <h5>Final Amount :</h5>
                    <p>$ 1534</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
