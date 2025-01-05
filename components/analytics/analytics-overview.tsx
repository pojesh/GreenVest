'use client';

import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { InvestmentChart } from './charts/investment-chart';
import { ImpactChart } from './charts/impact-chart';
import { RiskChart } from './charts/risk-chart';

export function AnalyticsOverview() {
  return (
    <Card>
      <Tabs defaultValue="investment" className="p-6">
        <TabsList>
          <TabsTrigger value="investment">Investment Performance</TabsTrigger>
          <TabsTrigger value="impact">Impact Analysis</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
        </TabsList>
        <TabsContent value="investment" className="space-y-4">
          <h3 className="text-lg font-medium">Investment Performance</h3>
          <InvestmentChart />
        </TabsContent>
        <TabsContent value="impact" className="space-y-4">
          <h3 className="text-lg font-medium">Impact Analysis</h3>
          <ImpactChart />
        </TabsContent>
        <TabsContent value="risk" className="space-y-4">
          <h3 className="text-lg font-medium">Risk Assessment</h3>
          <RiskChart />
        </TabsContent>
      </Tabs>
    </Card>
  );
}