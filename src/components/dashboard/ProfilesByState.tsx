import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { country: "United States", profiles: 1245 },
  { country: "Canada", profiles: 892 },
  { country: "China", profiles: 654 },
  { country: "Japan", profiles: 432 },
  { country: "Other", profiles: 1234 },
]

const chartConfig = {
  profiles: {
    label: "Profiles",
    color: "#A7DDD0",
  },
} satisfies ChartConfig

export function ProfilesByState() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Profiles by state</h2>
      </div>
      <Card className="shadow-none overflow-hidden">
        <CardContent className="p-3 md:p-6 overflow-hidden">
          <ChartContainer config={chartConfig} className="h-[250px] w-full overflow-hidden">
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                right: 8,
              }}
              className="w-full max-w-full"
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="country"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
              <XAxis dataKey="profiles" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar 
                dataKey="profiles" 
                layout="vertical"
                fill="#A7DDD0"
                radius={4}
              >
                <LabelList
                  dataKey="country"
                  position="insideLeft"
                  offset={8}
                  className="fill-foreground"
                  fontSize={14}
                />
                <LabelList
                  dataKey="profiles"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={14}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}

