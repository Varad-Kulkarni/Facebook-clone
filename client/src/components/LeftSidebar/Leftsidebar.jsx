import React from 'react'
import './Leftsidebar.css'
import { NavLink } from 'react-router-dom'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Username</p>
                </NavLink>
                <NavLink to='/' className='side-nav-links' activeclassname='active'>
                    <p>Friends</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Group</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Marketplace</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Watch</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Memories</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Saved</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Pages</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Events</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Most Recents</p>
                </NavLink>
                <NavLink to='/Groups' className='side-nav-links' activeclassname='active'>
                    <p>Favourites</p>
                </NavLink>
            </nav>
        </div>
    )
}

export default LeftSidebar