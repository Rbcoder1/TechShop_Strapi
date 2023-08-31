import React from 'react'
import '../Style/cartpage.css'
import CartItem from '../components/cartpage/CartItem'

const CartPage = () => {
    return (
        <div className="container cart-section">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-12 col-12 card">
                    <div className="d-flex justify-content-between align-items-center cart-heading-con">
                        <div className="cart-heading heading">
                            <h5>Shopping</h5>
                        </div>
                        <div className="cart-item-count"><p>(2)items</p></div>
                    </div>
                    <div className="cart-items">
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                        <CartItem/>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-12 card item-sumary">
                    <div className="d-flex justify-content-between align-items-center cartheading-con">
                        <div className="cart-heading heading cart-bill-heading"><h5>Your Bill</h5></div>
                        <div className="cart-amount-count"><p>(2)items</p></div>
                    </div>
                    <div className="bill-content">
                        <ul className='bill-shiping'>
                            <li>
                                <label htmlFor="Country">Country</label>
                                <select name="colors" id="colors" className='form-select'>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                    <option value="green">green</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="State">State</label>
                                <select name="colors" id="colors" className='form-select'>
                                    <option value="red">red</option>
                                    <option value="blue">blue</option>
                                    <option value="green">green</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="zipcode">Zip Code</label><br />
                                <input type="text" className="zip-control" />
                            </li>
                        </ul>
                        <div className="bill-btn d-flex justify-content-between">
                            <button className="btn btn-danger">Checkout</button>
                            <p>$ 1534</p>
                        </div>
                        <div className="total-amount">
                            <h5>Total :</h5>
                            <p>$ 1534</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
