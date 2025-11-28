
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", newProfiles: 222, repeatProfiles: 150, companies: 100 },
  { date: "2024-04-02", newProfiles: 97, repeatProfiles: 180, companies: 80 },
  { date: "2024-04-03", newProfiles: 167, repeatProfiles: 120, companies: 90 },
  { date: "2024-04-04", newProfiles: 242, repeatProfiles: 260, companies: 120 },
  { date: "2024-04-05", newProfiles: 373, repeatProfiles: 290, companies: 150 },
  { date: "2024-04-06", newProfiles: 301, repeatProfiles: 340, companies: 140 },
  { date: "2024-04-07", newProfiles: 245, repeatProfiles: 180, companies: 110 },
  { date: "2024-04-08", newProfiles: 409, repeatProfiles: 320, companies: 180 },
  { date: "2024-04-09", newProfiles: 59, repeatProfiles: 110, companies: 50 },
  { date: "2024-04-10", newProfiles: 261, repeatProfiles: 190, companies: 130 },
  { date: "2024-04-11", newProfiles: 327, repeatProfiles: 350, companies: 160 },
  { date: "2024-04-12", newProfiles: 292, repeatProfiles: 210, companies: 140 },
  { date: "2024-04-13", newProfiles: 342, repeatProfiles: 380, companies: 170 },
  { date: "2024-04-14", newProfiles: 137, repeatProfiles: 220, companies: 100 },
  { date: "2024-04-15", newProfiles: 120, repeatProfiles: 170, companies: 90 },
  { date: "2024-04-16", newProfiles: 138, repeatProfiles: 190, companies: 95 },
  { date: "2024-04-17", newProfiles: 446, repeatProfiles: 360, companies: 200 },
  { date: "2024-04-18", newProfiles: 364, repeatProfiles: 410, companies: 180 },
  { date: "2024-04-19", newProfiles: 243, repeatProfiles: 180, companies: 110 },
  { date: "2024-04-20", newProfiles: 89, repeatProfiles: 150, companies: 70 },
  { date: "2024-04-21", newProfiles: 137, repeatProfiles: 200, companies: 100 },
  { date: "2024-04-22", newProfiles: 224, repeatProfiles: 170, companies: 120 },
  { date: "2024-04-23", newProfiles: 138, repeatProfiles: 230, companies: 100 },
  { date: "2024-04-24", newProfiles: 387, repeatProfiles: 290, companies: 170 },
  { date: "2024-04-25", newProfiles: 215, repeatProfiles: 250, companies: 130 },
  { date: "2024-04-26", newProfiles: 75, repeatProfiles: 130, companies: 60 },
  { date: "2024-04-27", newProfiles: 383, repeatProfiles: 420, companies: 190 },
  { date: "2024-04-28", newProfiles: 122, repeatProfiles: 180, companies: 90 },
  { date: "2024-04-29", newProfiles: 315, repeatProfiles: 240, companies: 150 },
  { date: "2024-04-30", newProfiles: 454, repeatProfiles: 380, companies: 210 },
  { date: "2024-05-01", newProfiles: 165, repeatProfiles: 220, companies: 110 },
  { date: "2024-05-02", newProfiles: 293, repeatProfiles: 310, companies: 150 },
  { date: "2024-05-03", newProfiles: 247, repeatProfiles: 190, companies: 130 },
  { date: "2024-05-04", newProfiles: 385, repeatProfiles: 420, companies: 190 },
  { date: "2024-05-05", newProfiles: 481, repeatProfiles: 390, companies: 220 },
  { date: "2024-05-06", newProfiles: 498, repeatProfiles: 520, companies: 240 },
  { date: "2024-05-07", newProfiles: 388, repeatProfiles: 300, companies: 180 },
  { date: "2024-05-08", newProfiles: 149, repeatProfiles: 210, companies: 100 },
  { date: "2024-05-09", newProfiles: 227, repeatProfiles: 180, companies: 120 },
  { date: "2024-05-10", newProfiles: 293, repeatProfiles: 330, companies: 160 },
  { date: "2024-05-11", newProfiles: 335, repeatProfiles: 270, companies: 170 },
  { date: "2024-05-12", newProfiles: 197, repeatProfiles: 240, companies: 120 },
  { date: "2024-05-13", newProfiles: 197, repeatProfiles: 160, companies: 110 },
  { date: "2024-05-14", newProfiles: 448, repeatProfiles: 490, companies: 220 },
  { date: "2024-05-15", newProfiles: 473, repeatProfiles: 380, companies: 230 },
  { date: "2024-05-16", newProfiles: 338, repeatProfiles: 400, companies: 180 },
  { date: "2024-05-17", newProfiles: 499, repeatProfiles: 420, companies: 240 },
  { date: "2024-05-18", newProfiles: 315, repeatProfiles: 350, companies: 160 },
  { date: "2024-05-19", newProfiles: 235, repeatProfiles: 180, companies: 130 },
  { date: "2024-05-20", newProfiles: 177, repeatProfiles: 230, companies: 100 },
  { date: "2024-05-21", newProfiles: 82, repeatProfiles: 140, companies: 60 },
  { date: "2024-05-22", newProfiles: 81, repeatProfiles: 120, companies: 55 },
  { date: "2024-05-23", newProfiles: 252, repeatProfiles: 290, companies: 140 },
  { date: "2024-05-24", newProfiles: 294, repeatProfiles: 220, companies: 150 },
  { date: "2024-05-25", newProfiles: 201, repeatProfiles: 250, companies: 120 },
  { date: "2024-05-26", newProfiles: 213, repeatProfiles: 170, companies: 110 },
  { date: "2024-05-27", newProfiles: 420, repeatProfiles: 460, companies: 210 },
  { date: "2024-05-28", newProfiles: 233, repeatProfiles: 190, companies: 130 },
  { date: "2024-05-29", newProfiles: 78, repeatProfiles: 130, companies: 60 },
  { date: "2024-05-30", newProfiles: 340, repeatProfiles: 280, companies: 170 },
  { date: "2024-05-31", newProfiles: 178, repeatProfiles: 230, companies: 100 },
  { date: "2024-06-01", newProfiles: 178, repeatProfiles: 200, companies: 100 },
  { date: "2024-06-02", newProfiles: 470, repeatProfiles: 410, companies: 230 },
  { date: "2024-06-03", newProfiles: 103, repeatProfiles: 160, companies: 70 },
  { date: "2024-06-04", newProfiles: 439, repeatProfiles: 380, companies: 210 },
  { date: "2024-06-05", newProfiles: 88, repeatProfiles: 140, companies: 60 },
  { date: "2024-06-06", newProfiles: 294, repeatProfiles: 250, companies: 150 },
  { date: "2024-06-07", newProfiles: 323, repeatProfiles: 370, companies: 170 },
  { date: "2024-06-08", newProfiles: 385, repeatProfiles: 320, companies: 190 },
  { date: "2024-06-09", newProfiles: 438, repeatProfiles: 480, companies: 220 },
  { date: "2024-06-10", newProfiles: 155, repeatProfiles: 200, companies: 100 },
  { date: "2024-06-11", newProfiles: 92, repeatProfiles: 150, companies: 65 },
  { date: "2024-06-12", newProfiles: 492, repeatProfiles: 420, companies: 240 },
  { date: "2024-06-13", newProfiles: 81, repeatProfiles: 130, companies: 55 },
  { date: "2024-06-14", newProfiles: 426, repeatProfiles: 380, companies: 200 },
  { date: "2024-06-15", newProfiles: 307, repeatProfiles: 350, companies: 160 },
  { date: "2024-06-16", newProfiles: 371, repeatProfiles: 310, companies: 180 },
  { date: "2024-06-17", newProfiles: 475, repeatProfiles: 520, companies: 240 },
  { date: "2024-06-18", newProfiles: 107, repeatProfiles: 170, companies: 70 },
  { date: "2024-06-19", newProfiles: 341, repeatProfiles: 290, companies: 170 },
  { date: "2024-06-20", newProfiles: 408, repeatProfiles: 450, companies: 200 },
  { date: "2024-06-21", newProfiles: 169, repeatProfiles: 210, companies: 100 },
  { date: "2024-06-22", newProfiles: 317, repeatProfiles: 270, companies: 160 },
  { date: "2024-06-23", newProfiles: 480, repeatProfiles: 530, companies: 240 },
  { date: "2024-06-24", newProfiles: 132, repeatProfiles: 180, companies: 80 },
  { date: "2024-06-25", newProfiles: 141, repeatProfiles: 190, companies: 85 },
  { date: "2024-06-26", newProfiles: 434, repeatProfiles: 380, companies: 210 },
  { date: "2024-06-27", newProfiles: 448, repeatProfiles: 490, companies: 220 },
  { date: "2024-06-28", newProfiles: 149, repeatProfiles: 200, companies: 100 },
  { date: "2024-06-29", newProfiles: 103, repeatProfiles: 160, companies: 70 },
  { date: "2024-06-30", newProfiles: 446, repeatProfiles: 400, companies: 210 },
]

const chartConfig = {
  newProfiles: {
    label: "New Profiles",
    color: "#6E70DB", // medium purple/lavender
  },
  repeatProfiles: {
    label: "Repeat Profiles",
    color: "#3D8180", // teal/dark cyan
  },
  companies: {
    label: "Companies",
    color: "#A6BDD9", // light blue
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 30
    if (timeRange === "90d") {
      daysToSubtract = 90
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate.getTime())
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Identification types per day</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card className="shadow-none">
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillNewProfiles" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-newProfiles)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-newProfiles)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillRepeatProfiles" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-repeatProfiles)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-repeatProfiles)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillCompanies" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#A6BDD9"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#A6BDD9"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="newProfiles"
              type="natural"
              fill="url(#fillNewProfiles)"
              stroke="var(--color-newProfiles)"
              stackId="a"
            />
            <Area
              dataKey="repeatProfiles"
              type="natural"
              fill="url(#fillRepeatProfiles)"
              stroke="var(--color-repeatProfiles)"
              stackId="a"
            />
            <Area
              dataKey="companies"
              type="natural"
              fill="url(#fillCompanies)"
              stroke="#A6BDD9"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      </Card>
    </div>
  )
}
