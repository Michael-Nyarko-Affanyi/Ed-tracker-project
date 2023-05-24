import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    AreaChart,
    Area,
    ResponsiveContainer,
  } from 'recharts';
import CustomYAxisTick from './CustomYAxisTick';

  const data = [
    {
      week: 'Week 1',
      average: 60,
    },
    {
      week: 'Week 2',
      average: 87,
    },
    {
      week: 'Week 3',
      average: 54,
    },
    {
      week: 'Week 4',
      average: 40,
    },
    {
      week: 'Week 5',
      average: 68,
    },
    {
      week: 'Week 6',
      average: 73,
    },
    {
      week: 'Week 7',
      average: 84,
    },
    {
      week: 'Week 8',
      average: 54,
    },
  ];

const LineChartGraph = () => {
  return (
    <ResponsiveContainer width="100%" height="50%" className="mt-16">
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} tick={<CustomYAxisTick />} />
            <Tooltip />
            <Area type="monotone" dataKey="average" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
  )
}

export default LineChartGraph