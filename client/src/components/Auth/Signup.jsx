import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { push } from 'react-router-redux';
// import Form from 'react-bootstrap/Form';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Signup.css'
import { signup } from '../../actions/auth'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      alert("Enter name to continue...");
    }
    if(!email) {
      alert("Enter email to continue...");
    }
    if(!password) {
      alert("Enter password to continue...");
    }
    dispatch(signup({ name, email, password}, navigate))
}
  return (
    <div className="signup-container">
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
          <label htmlFor="text">
            <h4 className="email-container">Name</h4>
            <input type="text" name='name' id='name' onChange={(e) => { setName(e.target.value) }} />
          </label>
          <label htmlFor="email">
            <h4 className="password-container">Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor="password">
            <h4 className="confirm-password-container">Password</h4>
            <input type="password" name='password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
          </label>
          <Button type="submit">
            Sign Up
          </Button>
        </div>
      </form>
      <p>Or signin <Link to="/Auth"> here</Link></p>
    </div>
  )
}

export default Signup