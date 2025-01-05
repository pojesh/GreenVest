'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', risk: 45, benchmark: 50 },
  { month: 'Feb', risk: 42, benchmark: 49 },
  { month: 'Mar', risk: 48, benchmark: 51 },
  { month: 'Apr', risk: 40, benchmark: 48 },
  { month: 'May', risk: 38, benchmark: 47 },
  { month: 'Jun', risk: 35, benchmark: 45 },
];

export function RiskChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="month"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="risk" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="benchmark" 
            stroke="#94a3b8" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}