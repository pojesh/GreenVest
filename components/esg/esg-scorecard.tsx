'use client';

import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const scores = {
  environmental: {
    score: 85,
    metrics: [
      { name: 'Carbon Emissions', value: 90 },
      { name: 'Resource Usage', value: 82 },
      { name: 'Waste Management', value: 88 },
    ],
  },
  social: {
    score: 78,
    metrics: [
      { name: 'Community Impact', value: 85 },
      { name: 'Labor Rights', value: 75 },
      { name: 'Health & Safety', value: 80 },
    ],
  },
  governance: {
    score: 82,
    metrics: [
      { name: 'Board Diversity', value: 75 },
      { name: 'Ethics', value: 85 },
      { name: 'Transparency', value: 88 },
    ],
  },
};

export function ESGScorecard() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">ESG Scorecard</h3>
      <div className="space-y-6">
        {Object.entries(scores).map(([category, data]) => (
          <div key={category} className="space-y-2">
            <div className="flex justify-between items-center">
              <h4 className="capitalize">{category}</h4>
              <span className="text-sm font-medium">{data.score}%</span>
            </div>
            <Progress value={data.score} className="h-2" />
            <div className="grid grid-cols-1 gap-2 mt-2">
              {data.metrics.map((metric) => (
                <div key={metric.name} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.name}</span>
                  <span>{metric.value}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}