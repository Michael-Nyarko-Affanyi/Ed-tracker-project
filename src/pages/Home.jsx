import React, { useEffect, useState } from 'react'
import TableHead from '../components/TableHead'
import TableRow from '../components/TableRow'
import axios from 'axios'
import SelectKids from '../components/SelectKids'

const Home = () => {
  const [selectedStudent, setSelectedStudent] = useState([])

  return (
    <div className=' p-10'>
        <div className='flex justify-between items-center px-28'>
          <span>Welcome to the dashboard</span>
          <SelectKids setSelectedStudent={setSelectedStudent}/>
        </div>
        <div>
          <TableHead />
          {selectedStudent?.courses?.map(course => (
            <TableRow key={course.id} course={course}/>
          ))}
        </div>
    </div>
  )
}

export default Home