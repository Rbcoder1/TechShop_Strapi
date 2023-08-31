import React from 'react'


const increment = () => {
    console.log("Increment")
}
const decrement = () => {
    console.log("Decrement")
}

const CartItem = () => {
    return (
        <div>
            <div className="cart-item my-2">
                <ul className='d-flex'>
                    <li className='item-main-con'>
                        <div className="item-img">
                            <img src="https://electon5-store.myshopify.com/cdn/shop/products/11.1.jpg?v=1635246957" alt="" />
                        </div>
                        <div className="item-title mx-4">
                            <h5>DSLR Camera</h5>
                            <h5>Color :</h5> <p>black</p>
                        </div>
                    </li>
                    <li className='item-count-con'>
                        <div className="item-count">
                            <input type="text" className='form-control' value='1' onChange={() => { }} />
                            <div className="btn-group">
                                <div className="plus" onClick={() => increment()}>+</div>
                                <div className="minus" onClick={() => decrement()}>-</div>
                            </div>
                        </div>
                    </li>
                    <li className='item-price'>
                        <p>$ 134</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CartItem
