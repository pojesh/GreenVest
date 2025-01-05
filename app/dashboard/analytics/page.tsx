import { AnalyticsOverview } from '@/components/analytics/analytics-overview';
import { ComparisonTool } from '@/components/analytics/comparison-tool';
import { ScenarioSimulation } from '@/components/analytics/scenario-simulation';

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
      <div className="grid gap-4">
        <AnalyticsOverview />
        <ComparisonTool />
        <ScenarioSimulation />
      </div>
    </div>
  );
}