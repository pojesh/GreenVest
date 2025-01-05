import { PortfolioOverview } from '@/components/portfolio/portfolio-overview';
import { PortfolioDiversification } from '@/components/portfolio/portfolio-diversification';
import { PerformanceMetrics } from '@/components/portfolio/performance-metrics';

export default function PortfolioPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Portfolio</h2>
      <div className="grid gap-4">
        <PortfolioOverview />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <PortfolioDiversification />
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  );
}