import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home/Home'
import Auth from './Auth/Auth'
import Signup from './Auth/Signup'
import Form from '../Pages/FormAsk'

// ---PAGES UNDER CONSTRUCTION---
import Groups from '../Pages/Groups'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Form' element={<Form />} />



            {/* -----BELOW ROUTES ARE UNDER CONSTRUCTION----- */}
            <Route path='/Groups' element={<Groups />} />
        </Routes>

    )
}

export default AllRoutes