import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import {useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';

const Cart = () => {

    const warnnotify = () => {
        toast.info("sign up to access cart !", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const Navigate = useNavigate();

    const prod = [];
    const [cartProduct, setcartProduct] = useState({ cartProd: prod })
    const url = "http://localhost:5000/cart/get-products"
    useEffect(() => {
        fetch(url, {
            headers: { 'user-token': localStorage.getItem('logToken') }
        })
            .then(res => res.json())
            .then((data) => {
                setcartProduct({ cartProd: data });
            })
            .catch((err) => {
                const error = err;
                console.log(error)
            })
    }, [])
    if (!localStorage.getItem('logToken')) {
        warnnotify()
        Navigate("/signup")
    }

    return (
        <div>
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                                <div>
                                    <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                                        className="fas fa-angle-down mt-1"></i></a></p>
                                </div>
                            </div>

                            {
                                cartProduct.cartProd.map((e) => {
                                    return <CartItem key={e._id} id={e._id} title={e.title} price={e.price} label={e.label} />
                                })
                            }

                            {cartProduct.cartProd.length !== 0 ? <div className="card mb-4">
                                <div className="card-body p-4 d-flex flex-row">
                                    <div className="form-outline flex-fill">
                                        <input type="text" id="form1" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form1">Discound code</label>
                                    </div>
                                    <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                                </div>
                            </div> : <h1>No product added into cart</h1>}

                            {cartProduct.cartProd.length === 0 ? " " : <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
