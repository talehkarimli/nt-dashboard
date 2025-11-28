import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
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

// Generate dates from Oct 28 to Nov 27, 2025
const generateDates = () => {
  const dates = []
  const startDate = new Date(2025, 9, 28) // October 28, 2025 (month is 0-indexed)
  const endDate = new Date(2025, 10, 27) // November 27, 2025

  for (let d = new Date(startDate.getTime()); d <= endDate; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0] // Format: YYYY-MM-DD
    dates.push({
      date: dateStr,
      "New Profiles": 0,
      "Repeat Profiles": 0,
      Companies: 0,
    })
  }
  return dates
}

const chartData = generateDates()

const chartConfig = {
  "New Profiles": {
    label: "New Profiles",
    color: "hsl(142, 76%, 36%)", // Green
  },
  "Repeat Profiles": {
    label: "Repeat Profiles",
    color: "hsl(24, 95%, 53%)", // Orange
  },
  Companies: {
    label: "Companies",
    color: "hsl(0, 84%, 60%)", // Red
  },
} satisfies ChartConfig

export function IdentificationChart() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2025-11-27")
    let daysToSubtract = 30

    if (timeRange === "7d") {
      daysToSubtract = 7
    } else if (timeRange === "all") {
      return true
    }

    const startDate = new Date(referenceDate.getTime())
    startDate.setDate(startDate.getDate() - daysToSubtract)

    return date >= startDate
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Identification types per day</h2>
      </div>
      
      <Card className="shadow-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-end mb-4">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger
                className="w-[160px] rounded-lg"
                aria-label="Select time range"
              >
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                <SelectItem value="7d" className="rounded-lg">
                  Last 7 days
                </SelectItem>
                <SelectItem value="30d" className="rounded-lg">
                  Last 30 days
                </SelectItem>
                <SelectItem value="all" className="rounded-lg">
                  All time
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillNewProfiles" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(142, 76%, 36%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(142, 76%, 36%)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillRepeatProfiles" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(24, 95%, 53%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(24, 95%, 53%)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillCompanies" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(0, 84%, 60%)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(0, 84%, 60%)"
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
                dataKey="New Profiles"
                type="natural"
                fill="url(#fillNewProfiles)"
                stroke="hsl(142, 76%, 36%)"
                stackId="a"
              />
              <Area
                dataKey="Repeat Profiles"
                type="natural"
                fill="url(#fillRepeatProfiles)"
                stroke="hsl(24, 95%, 53%)"
                stackId="a"
              />
              <Area
                dataKey="Companies"
                type="natural"
                fill="url(#fillCompanies)"
                stroke="hsl(0, 84%, 60%)"
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
