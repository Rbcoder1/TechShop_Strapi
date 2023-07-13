import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const Navigate = useNavigate();

  useEffect((e) => {
    const logT = localStorage.getItem('logToken');
    if (logT) {
      Navigate("/")
    }

  })

  const handleSignUp = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    const url = "http://localhost:5000/auth/create-user"
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const resUser = await response.json();
    console.log(resUser);
    localStorage.setItem("logToken", resUser.token);
    Navigate("/")


  }
  return (
    <div className="bd">
      <div className="card1 flex-column">

        <div className="text-center intro">
          <img src="https://i.imgur.com/uNiv4bD.png" width="160" />
          <span className="d-block account">If You Already Have An Account !</span>
          <span className="contact">Click Here To <Link to="/login" className="mail">Sign  In</Link> Directly</span>
        </div>
        <div className="mt-4 text-center">
          <h4 className='mb-4' >Sign Up</h4>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <input type="name" className="form-control" placeholder='Full Name' name="name" id="exampleInputName" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder='Email' name="email" id="exampleInputEmail1" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder='Password' name="password" id="exampleInputPassword1" required />
              <h6 style={{ fontSize: "10px", textAlign: "left", color: "purple" }} className='my-1'>password must aleast 6 character</h6>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp

