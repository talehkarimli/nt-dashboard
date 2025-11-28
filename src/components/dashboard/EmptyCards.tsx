import { TopPageVisits } from "./TopPageVisits"
import { ProfilesByState } from "./ProfilesByState"
import { EventTypes } from "./EventTypes"
import { VisitorTypes } from "./VisitorTypes"

export function EmptyCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 min-w-0">
      {/* Top page visits */}
      <div className="min-w-0">
        <TopPageVisits />
      </div>

      {/* Profiles by state */}
      <div className="min-w-0">
        <ProfilesByState />
      </div>

      {/* Event types pie chart */}
      <div className="min-w-0">
        <EventTypes />
      </div>

      {/* Visitor types pie chart */}
      <div className="min-w-0">
        <VisitorTypes />
      </div>
    </div>
  )
}

