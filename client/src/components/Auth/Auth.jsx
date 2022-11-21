import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Auth.css'
import { signup, login } from '../../actions/auth'

import { useDispatch } from 'react-redux'
import { push } from 'react-router-redux';

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      alert("Enter email or password to continue...");
    }
    dispatch(login({ email, password }, navigate))
  }

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <div className="login">
          <div className="login__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="facebook_logo"
            />
            <img
              src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
              alt="facebook_text_logo"
            />
          </div>
          <label htmlFor="email">
            <h4 className="email-container">Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor="password">
            <h4 className="password-container">Password</h4>
            <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
          </label>
          <Button type="submit">
            Sign In
          </Button>
        </div>
      </form>
      <p>Or signup <Link to="/Signup"> here</Link></p>
    </div>


  )
}

export default Auth