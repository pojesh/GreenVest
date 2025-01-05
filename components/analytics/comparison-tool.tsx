'use client';

import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { metric: 'ROI', project1: 12, project2: 15 },
  { metric: 'ESG Score', project1: 85, project2: 78 },
  { metric: 'Risk Level', project1: 45, project2: 52 },
  { metric: 'Impact Score', project1: 92, project2: 88 },
];

export function ComparisonTool() {
  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <h3 className="text-lg font-medium">Project Comparison</h3>
        <div className="flex gap-4">
          <Select defaultValue="project1">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="project1">Solar Farm Project</SelectItem>
              <SelectItem value="project2">Wind Power Plant</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="project2">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="project1">Solar Farm Project</SelectItem>
              <SelectItem value="project2">Wind Power Plant</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="metric"
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
            <Bar dataKey="project1" fill="#4ade80" name="Solar Farm Project" />
            <Bar dataKey="project2" fill="#60a5fa" name="Wind Power Plant" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}