import { React, useState, useEffect } from 'react'
import '../../assets/Style/NavBar.css'
import '../../App.css'
import { Link } from "react-router-dom";
import Logout from './Logout';
import LoginBtn from './LoginBtn';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    return (
        <div style={{ color: "white" }}>
            <nav className="navbar navbar-expand navbar-light fixed-top hNav" >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            <img src="/mylogo.png" alt="mylogo" width="130" height="30" />
                        </Link>
                    </div>
                    <input type="text" name='search' className='search' placeholder='Product Mobile, Laptop, Accessories,etc' />
                    <div className="rightnav d-flex align-items-center">
                        {localStorage.getItem('logToken') ? <Logout /> : <LoginBtn />}
                        <div className="d-flex">
                            <div className="d-flex align-items-center">
                                <i className="fa-regular fa-heart ic"></i>
                                <Link className="text-reset me-3" to="/like">
                                    <span className='cartBtn'>
                                        <p>Wishlist</p>
                                    </span>
                                </Link>
                            </div>
                            <div className=' d-flex align-items-center'>
                                <i className="fas fa-shopping-cart ic "></i>
                                <Link className="text-reset me-3" to="/cart">
                                    <span className='cartBtn'>
                                        <p>Cart</p>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default NavBar



// <ToastContainer
// position="top-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"
// />
// {/* Same as */}
// <ToastContainer />