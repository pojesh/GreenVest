'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', investment: 2400 },
  { month: 'Feb', investment: 1398 },
  { month: 'Mar', investment: 9800 },
  { month: 'Apr', investment: 3908 },
  { month: 'May', investment: 4800 },
  { month: 'Jun', investment: 3800 },
  { month: 'Jul', investment: 4300 },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="investment"
          stroke="#4ade80"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}