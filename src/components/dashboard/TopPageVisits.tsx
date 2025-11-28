import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { page: "/about", visits: 1245, url: "/about" },
  { page: "/pricing", visits: 892, url: "/pricing" },
  { page: "/contact", visits: 654, url: "/contact" },
  { page: "/blog", visits: 432, url: "/blog" },
  { page: "/home", visits: 321, url: "/" },
]

const chartConfig = {
  visits: {
    label: "Visits",
    color: "#DDEFF3",
  },
} satisfies ChartConfig

export function TopPageVisits() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Top page visits</h2>
      </div>
      <Card className="shadow-none overflow-hidden">
        <CardContent className="p-3 md:p-6 overflow-hidden">
          <ChartContainer
            config={chartConfig}
            className="h-[250px] w-full overflow-hidden"
          >
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
                dataKey="page"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
              <XAxis dataKey="visits" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="visits"
                layout="vertical"
                fill="#DDEFF3"
                radius={4}
              >
                <LabelList
                  dataKey="page"
                  className="fill-foreground cursor-pointer"
                  fontSize={14}
                  content={(props) => {
                    const { x, y, height, value, index } = props
                    const item = chartData[index as number]
                    const handleClick = () => {
                      if (item?.url) {
                        window.location.href = item.url
                      }
                    }
                    if (x == null || y == null || height == null) return null
                    const xNum = typeof x === 'number' ? x : parseFloat(x)
                    const yNum = typeof y === 'number' ? y : parseFloat(y)
                    const heightNum = typeof height === 'number' ? height : parseFloat(height)
                    return (
                      <text
                        x={xNum + 8}
                        y={yNum + heightNum / 2}
                        alignmentBaseline="central"
                        fill="hsl(var(--foreground))"
                        fontSize={14}
                        style={{ cursor: item?.url ? "pointer" : "default" }}
                        onClick={handleClick}
                      >
                        {value}
                      </text>
                    )
                  }}
                />
                <LabelList
                  dataKey="visits"
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

