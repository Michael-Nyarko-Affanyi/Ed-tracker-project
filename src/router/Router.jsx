import React from 'react'
import { Route, Routes } from 'react-router'
import HomeLayout from '../layouts/HomeLayout'
import Home from '../pages/Home'
import Progress from '../pages/Progress'
import ViewKids from '../pages/ViewKids'
import Settings from '../pages/Settings'

const Router = () => {
  return (
    <Routes>
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