import { Pie, PieChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  {
    visitorType: "Identified",
    value: 1245,
    fill: "#284A74",
  },
  {
    visitorType: "Anonymous",
    value: 654,
    fill: "#3D8180",
  },
]

const chartConfig = {
  value: {
    label: "Visitors",
  },
  Identified: {
    label: "Identified",
    color: "#284A74", // dark grey
  },
  Anonymous: {
    label: "Anonymous",
    color: "#3D8180", // dark green - same as Repeat Profiles
  },
} satisfies ChartConfig

export function VisitorTypes() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Visitor types</h2>
      </div>
      <Card className="shadow-none overflow-hidden">
        <CardContent className="p-3 md:p-6 overflow-hidden">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            <PieChart>
              <Pie data={chartData} dataKey="value" nameKey="visitorType" />
              <ChartLegend
                content={<ChartLegendContent nameKey="visitorType" />}
                className="-translate-y-2 flex items-center justify-center gap-4"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}



