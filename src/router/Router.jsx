import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from '../components/Sidebar'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Router = () => {
  return (
    <Routes>
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default Router