import React from 'react'
import { Route, Routes } from 'react-router'
import Sidebar from '../components/Sidebar'

const Router = () => {
  return (
    <Routes>
        <Route path='/sidebar' element={<Sidebar />} />
    </Routes>
  )
}

export default Router