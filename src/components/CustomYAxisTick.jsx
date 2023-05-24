import React from 'react'

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <text x={x} y={y} dy={-4} textAnchor="end" fill="#666" fontSize={10}>
      {payload.value}
    </text>
  )
}

export default CustomYAxisTick