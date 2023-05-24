import React from 'react'

const TableRow = ({course}) => {

  return (
    <div className='flex bg-blue-100 cursor-pointer p-5 text-md text-gray-800 text-center'>
        <span className='flex-[1.43]'>{course.id}</span>
        <span className='flex-[1.43]'>{course.name}</span>
        <span className='flex-[1.43]'>{course.teacher}</span>
        <span className='flex-[1.43]'>{course.test_marks}</span>
        <span className='flex-[1.43]'>{course.exam_marks}</span>
        <span className='flex-[1.43]'>{course.test_marks + course.exam_marks}</span>
        <span className='flex-[1.43]'>
            <span className={`${(course.test_marks + course.exam_marks) > 50 ? 'bg-green-400' : 'bg-red-400'} px-5 font-semibold text-white rounded-full`}>
            {(course.test_marks + course.exam_marks) > 50 ? 'Passed' : 'failed' }
            </span>
        </span>
        {/* <span className='flex-[1.43]'>Name</span>
        <span className='flex-[1.43]'>Name</span> */}
    </div>
  )
}

export default TableRow