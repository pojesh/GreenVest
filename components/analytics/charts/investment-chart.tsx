'use client';

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { month: 'Jan', investment: 2400, returns: 2600 },
  { month: 'Feb', investment: 1398, returns: 1500 },
  { month: 'Mar', investment: 9800, returns: 10200 },
  { month: 'Apr', investment: 3908, returns: 4100 },
  { month: 'May', investment: 4800, returns: 5100 },
  { month: 'Jun', investment: 3800, returns: 4000 },
];

export function InvestmentChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#4ade80" fill="#4ade80" fillOpacity={0.2} />
          <Area type="monotone" dataKey="returns" stackId="1" stroke="#60a5fa" fill="#60a5fa" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}