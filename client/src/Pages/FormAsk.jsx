import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../actions/facebookpost'

const FormAsk = () => {
  const [discription, setDiscription] = useState('');
  const [image, setImage] = useState([]);
  const dispatch = useDispatch();
  const User = useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("tttttt.....");
    e.preventDefault();
    console.log(discription + "\n" + User.result.name + "\n" + User?.result?._id)
    dispatch(askQuestion({ discription, userPosted: User.result.name, userId: User?.result?._id}, navigate))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <label htmlFor="email">
            <h4 className="email-container">Discription</h4>
            <input type="text" name='discription' id='discription' onChange={(e) => { setDiscription(e.target.value) }} />
          </label>
          <label htmlFor="password">
            <h4 className="password-container">Image</h4>
            <input type="file" multiple accept="image/*" onChange={setImage} />
          </label>
          <button type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormAsk