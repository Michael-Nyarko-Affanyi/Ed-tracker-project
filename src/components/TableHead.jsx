import React from 'react'

const TableHead = () => {
  return (
    <div className='flex bg-blue-200 p-5 text-lg font-semibold text-gray-800 mt-7 text-center'>
        <span className='flex-[1.43]'>Course id</span>
        <span className='flex-[1.43]'>Course name</span>
        <span className='flex-[1.43]'>Teacher/Facilatator</span>
        <span className='flex-[1.43]'>Assignments score</span>
        <span className='flex-[1.43]'>Examination score</span>
        <span className='flex-[1.43]'>Total score</span>
        <span className='flex-[1.43]'>Status</span>
        {/* <span className='flex-[1.43]'>Name</span>
        <span className='flex-[1.43]'>Name</span> */}
    </div>
  )
}

export default TableHead