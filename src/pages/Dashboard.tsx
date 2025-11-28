import { TrafficSummary } from "@/components/dashboard/TrafficSummary"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { EmptyCards } from "@/components/dashboard/EmptyCards"

function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-2 md:p-6">
      <TrafficSummary />
      <ChartAreaInteractive />
      <EmptyCards />
    </div>
  )
}

export default DashboardPage
