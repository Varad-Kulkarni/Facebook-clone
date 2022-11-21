import React from 'react'
import Auth from '../Auth/Auth'
import AllRoutes from '../AllRoutes'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import LeftSidebar from '../LeftSidebar/Leftsidebar'
import HomemainBar from './Homemainbar'

const Home = () => {
  return (
    <div className="parent">
      <div className="auth-page child">
        <Navbar />
      </div>
      {/* <div className="leftsidebar-container">
        <LeftSidebar />

      </div> */}
      <div className="home-container">
        <HomemainBar />
      </div>
      {/* <div className="leftsidebar-container">
        <p>This is it</p>
        <p>This is it</p>

        <p>This is it</p>

        <p>This is it</p>

        <p>This is it</p>

      </div> */}
    </div>
  )
}

export default Home