import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import {
//     MDBBtn,
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBInput,
//     MDBCheckbox,
//     MDBIcon
// }
//     from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Style/login.css'


const successnotify = () => {
    toast.success('Login Successfully', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}

const warnnotify = (msg) => {
    toast.error(msg, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}
const Login = () => {
    const Navigate = useNavigate();
    // let history = useHistory ();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const url = "http://localhost:5000/auth/login-user"
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result)
        if (!result.errors) {
            localStorage.setItem("logToken", result.logtoken);
            successnotify();
            Navigate("/");
        }
        else {
            result.errors.map((e) => {
                // alert(e.msg);
                warnnotify(e.msg)
            })
        }
        if (!result) {
            console.log("some error occures ")
        }

    }

    useEffect(() => {
        const logT = localStorage.getItem('logToken');
        if (logT) {
            Navigate("/");
        }
    })

    return (
        <div className="bd">
            <div className="card1 flex-column">

                <div className="text-center intro">
                    <img src="https://i.imgur.com/uNiv4bD.png" width="160" />
                    <span className="d-block account">Don't have account yet?</span>
                    <span className="contact">Click Here To <Link to="/signup" className="mail">Create Account</Link> </span>
                </div>
                <div className="mt-4 text-center">
                    <h4 className='mb-4' >Sign In</h4>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder='Enter Your Email' name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Enter your Password' name="password" id="exampleInputPassword1" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login

