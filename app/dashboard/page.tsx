import { Card } from '@/components/ui/card';
import { Overview } from '@/components/dashboard/overview';
import { RecentProjects } from '@/components/dashboard/recent-projects';
import { ESGMetrics } from '@/components/dashboard/esg-metrics';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Projects</div>
          </div>
          <div className="text-2xl font-bold">127</div>
          <div className="text-xs text-muted-foreground">
            +20.1% from last month
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Average ESG Score</div>
          </div>
          <div className="text-2xl font-bold">82.4</div>
          <div className="text-xs text-muted-foreground">
            +4.3% from last month
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Total Investment</div>
          </div>
          <div className="text-2xl font-bold">$324.2M</div>
          <div className="text-xs text-muted-foreground">
            +12.5% from last month
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="text-sm font-medium">Carbon Offset</div>
          </div>
          <div className="text-2xl font-bold">1.2M tons</div>
          <div className="text-xs text-muted-foreground">
            +8.2% from last month
          </div>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <div className="p-6">
            <div className="flex items-center justify-between space-y-2">
              <h3 className="text-lg font-medium">Investment Overview</h3>
            </div>
            <Overview />
          </div>
        </Card>
        <Card className="col-span-3">
          <div className="p-6">
            <div className="flex items-center justify-between space-y-2">
              <h3 className="text-lg font-medium">ESG Metrics</h3>
            </div>
            <ESGMetrics />
          </div>
        </Card>
      </div>
      <div className="grid gap-4">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between space-y-2">
              <h3 className="text-lg font-medium">Recent Projects</h3>
            </div>
            <RecentProjects />
          </div>
        </Card>
      </div>
    </div>
  );
}