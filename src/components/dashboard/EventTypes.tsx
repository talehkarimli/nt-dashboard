import { Pie, PieChart } from "recharts"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { eventType: "custom", value: 1245, fill: "var(--color-custom)" },
  { eventType: "page_view", value: 892, fill: "var(--color-page_view)" },
  { eventType: "cart_add", value: 654, fill: "var(--color-cart_add)" },
  { eventType: "cart_view", value: 432, fill: "var(--color-cart_view)" },
  {
    eventType: "checkout_start",
    value: 321,
    fill: "var(--color-checkout_start)",
  },
  { eventType: "purchase", value: 210, fill: "var(--color-purchase)" },
]

const chartConfig = {
  value: {
    label: "Events",
  },
  custom: {
    label: "Custom",
    color: "#6E70DB",
  },
  page_view: {
    label: "Page viewed",
    color: "#3D8180",
  },
  cart_add: {
    label: "Add to cart",
    color: "#A6BDD9",
  },
  cart_view: {
    label: "Cart viewed",
    color: "#DDEFF3",
  },
  checkout_start: {
    label: "Checkout",
    color: "#A7DDD0",
  },
  purchase: {
    label: "Purchase",
    color: "#284A74",
  },
} satisfies ChartConfig

export function EventTypes() {
  return (
    <div className="space-y-4 min-w-0">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Event types</h2>
      </div>
      <Card className="shadow-none overflow-hidden">
        <CardContent className="p-3 md:p-6 overflow-hidden">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px]"
          >
            <PieChart>
              <Pie data={chartData} dataKey="value" nameKey="eventType" />
              <ChartLegend
                content={<ChartLegendContent nameKey="eventType" />}
                className="-translate-y-2 grid grid-cols-3 gap-x-4 gap-y-1 justify-items-start"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}



