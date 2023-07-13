import React from 'react'
import { Link } from 'react-router-dom'

const LoginBtn = () => {
    return (
        <div className="loginSec mx-4 d-flex align-items-center">
            <i className=" fa-sharp fa-2l fa-solid fa-user ic"></i>
            <Link to="/login" className=" mx-2 a d-flex align-items-center" style={{ color: "white" }}>
                <span className='loginBtn'>
                    <p>Sign in</p>
                    <p>Join Us</p>
                </span>
            </Link>
        </div>
    )
}

export default LoginBtn
