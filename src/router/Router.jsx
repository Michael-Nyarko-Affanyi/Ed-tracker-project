import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from '../components/Sidebar'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import HomeLayout from '../layouts/HomeLayout'
import Home from '../pages/Home'
import Progress from '../pages/Progress'
import ViewKids from '../pages/ViewKids'
import Settings from '../pages/Settings'

const Router = () => {
  return (
    <Routes>
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<HomeLayout />} >
            <Route index element={<Home />} />
            <Route path='/home/progress' element={<Progress />} />
            <Route path='/home/viewkids' element={<ViewKids />} />
        </Route>
        <Route path='/settings' element={<Settings />} />
    </Routes>
  )
}

export default Router