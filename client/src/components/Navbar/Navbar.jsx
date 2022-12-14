import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../src/assets/logo.png';
// import search from '../../src/assets/search-solid.svg';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentUser } from '../actions/currentUser';
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode';

const Navbar = () => {

  // var User = JSON.parse(localStorage.getItem('Profile'));
  const dispatch = useDispatch();
  var User = useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'});
    navigate('/');
    dispatch(setCurrentUser(null));
  }

  useEffect(() => {
    const token = User?.token
    if(token){
      const decodeToken = decode(token);
      if(decodeToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser (JSON.parse(localStorage.getItem('Profile'))))
  }, [dispatch])

  return (
    <nav className='main-nav'>
      <div className='navbar'>
        {/* <Link to='/' className='nav-item nav-logo'>
          <img src={logo} alt="" />
        </Link> */}

        <Link to='/' className='nav-item nav-btn'>Home</Link>
        <Link to='/' className='nav-item nav-btn'>Friends</Link>
        <Link to='/Groups' className='nav-item nav-btn'>Watch</Link>
        <Link to='/Groups' className='nav-item nav-btn'>Marketplace</Link>
        <Link to='/Groups' className='nav-item nav-btn'>Groups</Link>

        {User === null ?
          <Link to='/Auth' className='nav-item nav-links'>log in</Link> :
          <>
            <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color="white"><div style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</div></Avatar>
            <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
          </>
        }

      </div>
    </nav>
  )
}

export default Navbar