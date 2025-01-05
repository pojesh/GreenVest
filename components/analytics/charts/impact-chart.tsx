'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { category: 'Carbon Reduction', value: 75 },
  { category: 'Water Saved', value: 82 },
  { category: 'Waste Reduced', value: 65 },
  { category: 'Energy Saved', value: 90 },
  { category: 'Jobs Created', value: 70 },
];

export function ImpactChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="category"
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
          <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}