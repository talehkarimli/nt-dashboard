import { Card, CardContent } from "@/components/ui/card"

const trafficData = [
  {
    title: "Impressions",
    value: "58616",
  },
  {
    title: "Repeat Profiles",
    value: "0",
  },
  {
    title: "Company Profiles",
    value: "0",
  },
  {
    title: "Total Visitors",
    value: "0",
  },
]

export function TrafficSummary() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold">Traffic summary</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trafficData.map((item) => {
          return (
            <Card key={item.title} className="shadow-none">
              <CardContent className="flex flex-col gap-2 p-6">
                <p className="text-sm text-muted-foreground font-normal">{item.title}</p>
                <p className="text-[1.75rem] font-normal leading-tight">{item.value}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

