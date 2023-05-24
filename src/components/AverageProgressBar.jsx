import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AverageProgressBar = () => {
    const [percentage, setPercentage] = useState(77)
  return (
    <div className=" w-1/4 mr-20 text-center">
        <CircularProgressbar value={percentage} text={`${percentage}%`} className='mb-5'/>
        <span className=' text-blue-900 text-3xl font-semibold'>Average Mark</span>
    </div>
  )
}

export default AverageProgressBar