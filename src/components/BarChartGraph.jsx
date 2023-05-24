import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import CustomYAxisTick from './CustomYAxisTick';
import { useSelector } from 'react-redux';

// const data = [
//     {
//       name: 'Maths',
//       Exams: 40,
//       Tests: 24,
//       total: 64,
//     },
//     {
//       name: 'Science',
//       Exams: 40,
//       Tests: 36,
//       total: 76,
//     },
//     {
//       name: 'English',
//       Exams: 52,
//       Tests: 29,
//       total: 81,
//     },
//     {
//       name: 'History',
//       Exams: 47,
//       Tests: 39,
//       total: 76,
//     },
//     {
//       name: 'Physics',
//       Exams: 38,
//       Tests: 28,
//       total: 66,
//     },
//     {
//       name: 'Geography',
//       Exams: 43,
//       Tests: 38,
//       total: 81,
//     },
//     {
//       name: 'Government',
//       Exams: 34,
//       Tests: 43,
//       total: 77,
//     },
//   ];

  // const CustomYAxisTick = ({ x, y, payload }) => (
  //   <text x={x} y={y} dy={-4} textAnchor="end" fill="#666" fontSize={10}>
  //     {payload.value}
  //   </text>
  // );

const BarChartGraph = () => {
  const {BarChartData} = useSelector(store => store.chart)

  // console.log(BarChartData)
  return (
    <ResponsiveContainer width="60%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={BarChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tick={<CustomYAxisTick />} />
          <Tooltip />
          <Legend />
          <Bar dataKey="test" fill="#8884d8" />
          <Bar dataKey="exams" fill="#479abe" />
          <Bar dataKey="total" fill="#39a863" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default BarChartGraph