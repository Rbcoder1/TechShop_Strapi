import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
    return (
        <div className="loginSec mx-4 ">
            <Link to="/profile" className=" mx-2 a d-flex align-items-center" style={{ color: "white" }}>
                <i className=" fa-sharp fa-2l fa-solid fa-user ic"></i>
            </Link>

        </div>
    )
}

export default Logout
