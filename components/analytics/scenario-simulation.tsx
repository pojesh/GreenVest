'use client';

import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

const baseData = [
  { year: 2024, baseline: 100, optimistic: 110, pessimistic: 90 },
  { year: 2025, baseline: 120, optimistic: 140, pessimistic: 100 },
  { year: 2026, baseline: 150, optimistic: 180, pessimistic: 120 },
  { year: 2027, baseline: 180, optimistic: 220, pessimistic: 140 },
  { year: 2028, baseline: 220, optimistic: 270, pessimistic: 170 },
];

export function ScenarioSimulation() {
  const [riskFactor, setRiskFactor] = useState(50);
  const [marketGrowth, setMarketGrowth] = useState(30);

  return (
    <Card className="p-6">
      <div className="mb-6 space-y-4">
        <h3 className="text-lg font-medium">Scenario Simulation</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Risk Factor</Label>
            <Slider
              value={[riskFactor]}
              onValueChange={(value) => setRiskFactor(value[0])}
              max={100}
              step={1}
            />
          </div>
          <div className="space-y-2">
            <Label>Market Growth Rate</Label>
            <Slider
              value={[marketGrowth]}
              onValueChange={(value) => setMarketGrowth(value[0])}
              max={100}
              step={1}
            />
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={baseData}>
            <XAxis 
              dataKey="year"
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
              dataKey="baseline" 
              stroke="#4ade80" 
              strokeWidth={2}
              name="Baseline"
            />
            <Line 
              type="monotone" 
              dataKey="optimistic" 
              stroke="#60a5fa" 
              strokeWidth={2}
              name="Optimistic"
            />
            <Line 
              type="monotone" 
              dataKey="pessimistic" 
              stroke="#f87171" 
              strokeWidth={2}
              name="Pessimistic"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}