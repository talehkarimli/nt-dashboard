import { DataTable } from "@/components/data-table"
import tableData from "@/app/dashboard/data.json"

export function OverviewTable() {
  return (
    <div className="flex flex-1 flex-col">
      <DataTable data={tableData} />
    </div>
  )
}

