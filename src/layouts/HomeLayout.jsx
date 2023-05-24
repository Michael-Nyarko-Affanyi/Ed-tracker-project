import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Settings from '../pages/Settings'
import { useSelector } from 'react-redux'

const HomeLayout = () => {
  const {isOpen} = useSelector(store => store.settings)
  return (
    <div className='flex w-full h-full'>
      {isOpen && <Settings />}
        <Sidebar />
        <div className=' w-4/5 bg-transparent'>
            <Navbar />
            <div className='w-full dashboard-body overflow-y-scroll'>
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default HomeLayout