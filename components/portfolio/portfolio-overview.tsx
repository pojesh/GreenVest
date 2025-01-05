'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { sector: 'Renewable Energy', allocation: 45, returns: 12 },
  { sector: 'Green Buildings', allocation: 25, returns: 8 },
  { sector: 'Clean Transport', allocation: 15, returns: 15 },
  { sector: 'Sustainable Ag', allocation: 10, returns: 6 },
  { sector: 'Water', allocation: 5, returns: 9 },
];

export function PortfolioOverview() {
  return (
    <Card>
      <Tabs defaultValue="allocation" className="p-6">
        <TabsList>
          <TabsTrigger value="allocation">Asset Allocation</TabsTrigger>
          <TabsTrigger value="returns">Returns by Sector</TabsTrigger>
        </TabsList>
        <TabsContent value="allocation" className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="allocation" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="returns" className="h-[300px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="sector" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="returns" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    </Card>
  );
}