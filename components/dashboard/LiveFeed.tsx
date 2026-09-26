import { Report } from '@/lib/mockReports'
import { EVENT_TYPES, STATUS_META } from '@/lib/constants'

function timeAgo(minutes: number) {
  if (minutes < 60) return `${minutes}m ago`
  return `${Math.floor(minutes / 60)}h ago`
}

export default function LiveFeed({
  reports,
  selectedId,
  onSelect,
}: {
  reports: Report[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const sorted = [...reports].sort((a, b) => a.minutesAgo - b.minutesAgo)

  return (
    <div className="flex h-full flex-col rounded-2xl border border-brand-brown/10 bg-white">
      <div className="border-b border-brand-brown/10 px-5 py-4">
        <h3 className="font-heading text-lg font-bold text-brand-brown">Live Feed</h3>
      </div>
      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {sorted.map((report) => {
          const event = EVENT_TYPES.find((e) => e.id === report.eventType)!
          const status = STATUS_META[report.status]
          return (
            <button
              key={report.id}
              onClick={() => onSelect(report.id)}
              className={`w-full rounded-xl border p-3 text-left transition ${report.id === selectedId ? 'border-brand-brown bg-brand-cream' : 'border-transparent hover:bg-brand-cream/60'}`}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full px-2 py-0.5 text-[11px] font-semibold text-white" style={{ backgroundColor: event.color }}>
                  {event.label}
                </span>
                <span className="text-[11px] text-brand-brown/50">{timeAgo(report.minutesAgo)}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-brand-brown/90">{report.text}</p>
              <div className="mt-2 flex items-center justify-between text-[11px] text-brand-brown/60">
                <span>{report.locality}, {report.district}</span>
                <span className="flex items-center gap-1 font-semibold" style={{ color: status.color }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: status.color }} />
                  {Math.round(report.credibility * 100)}%
                </span>
              </div>
            </button>
          )
        })}
        {sorted.length === 0 && <p className="p-6 text-center text-sm text-brand-brown/50">No reports match these filters.</p>}
      </div>
    </div>
  )
}