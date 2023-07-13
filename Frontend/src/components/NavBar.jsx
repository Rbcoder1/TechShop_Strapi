import { React, useState, useEffect } from 'react'
import '../App.css'
import '../Style/NavBar.css'
import { Link } from "react-router-dom";
import Logout from './Logout';
import LoginBtn from './LoginBtn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
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
    }, [])

    return (
        <div style={{ color: "white" }}>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top hNav" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="/">
                            <img src="/mylogo.png" alt="mylogo" width="130" height="30" />
                        </a>
                        <div className="d-flex justify-content-center  align-items-center px-5">
                            <div className="search">
                                <input type="text" className="search-input" placeholder="Search..." name="search" />
                                <a href="#" className="search-icon">
                                    <i className="fa fa-search"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {localStorage.getItem('logToken') ? <Logout /> : <LoginBtn />}

                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-heart ic"></i>
                            <Link className="text-reset me-3" to="/like">
                                <span className='cartBtn'>
                                    <p className="Wishlist">0</p>
                                    <p>Wishlist</p>
                                </span>
                            </Link>
                        </div>
                        <div className=' d-flex align-items-center'>
                            <i className="fas fa-shopping-cart ic "></i>
                            <Link className="text-reset me-3" to="/cart">
                                <span className='cartBtn'>
                                    <p className="cartNo">{cartProduct.cartProd.length ? cartProduct.cartProd.length : 0}</p>
                                    <p>Cart</p>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </nav >
            {/* <SubNavBar/> */}
        </div >
    )
}

export default NavBar
