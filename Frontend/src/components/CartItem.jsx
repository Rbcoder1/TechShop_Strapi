import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CartItem = (props) => {
    const { title, price, id } = props
    const [productQuantity, setproductQuantity] = useState(0)

    const hadlePlusClick = async (e) => {
        e.preventDefault();
        setproductQuantity(productQuantity + 1)
    }

    const handleOnchange = (e) => {
        e.target.quantity.value = productQuantity;
    }

    const handleMinClick = (e) => {
        e.preventDefault();
        if (productQuantity === 0) {
            setproductQuantity(0);
        }
        else {
            setproductQuantity(productQuantity - 1)
        }
    }

    const handleDeleteCartProduct = async (e) => {
        const url = `http://localhost:5000/cart/delete-product${id}`
        const res = await fetch(url, {
            method: 'DELETE',
            headers: { 'user-token': localStorage.getItem('logToken') },
        })
        const data = await res.json();
        console.log(data)
    }

    return (
        <div>
            <div className="card rounded-3 mb-4">
                <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{title}</p>
                            <p><span className="text-muted">Size: </span>M <span className="text-muted">Color: </span>Grey</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button className="btn btn-link px-2"
                                onClick={handleMinClick}>
                                <i className="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value={productQuantity} onChange={handleOnchange} type="number"
                                className="form-control form-control-sm" />

                            <button className="btn btn-link px-2" onClick={hadlePlusClick}>
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <Link to="/cart" onClick={handleDeleteCartProduct} className="text-danger"><i className="fas fa-trash fa-lg"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
