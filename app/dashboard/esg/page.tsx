import { ESGScorecard } from '@/components/esg/esg-scorecard';
import { ESGTrends } from '@/components/esg/esg-trends';
import { ESGBenchmark } from '@/components/esg/esg-benchmark';

export default function ESGPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">ESG Metrics</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <ESGScorecard />
        <ESGBenchmark />
      </div>
      <ESGTrends />
    </div>
  );
}