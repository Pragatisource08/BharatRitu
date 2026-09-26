'use client'

import { EVENT_TYPES, STATUS_META, ReportStatus, EventType } from '@/lib/constants'

const DATE_PRESETS = [
  { id: 'last_hour', label: 'Last Hour' },
  { id: 'today', label: 'Today' },
  { id: '7d', label: '7 Days' },
  { id: '30d', label: '30 Days' },
] as const

export type DatePreset = (typeof DATE_PRESETS)[number]['id']

export interface FiltersState {
  datePreset: DatePreset
  eventTypes: EventType[]
  statuses: ReportStatus[]
  state: string
  search: string
}

export default function FiltersBar({
  filters,
  onChange,
  states,
}: {
  filters: FiltersState
  onChange: (next: FiltersState) => void
  states: string[]
}) {
  const toggleEvent = (id: EventType) => {
    const has = filters.eventTypes.includes(id)
    onChange({ ...filters, eventTypes: has ? filters.eventTypes.filter((e) => e !== id) : [...filters.eventTypes, id] })
  }

  const toggleStatus = (id: ReportStatus) => {
    const has = filters.statuses.includes(id)
    onChange({ ...filters, statuses: has ? filters.statuses.filter((s) => s !== id) : [...filters.statuses, id] })
  }

  return (
    <div className="rounded-2xl border border-brand-brown/10 bg-white p-5">
      <div className="flex flex-wrap items-center gap-2">
        {DATE_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => onChange({ ...filters, datePreset: preset.id })}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${filters.datePreset === preset.id ? 'bg-brand-brown text-white' : 'bg-brand-cream text-brand-brown hover:bg-brand-brown/10'}`}
          >
            {preset.label}
          </button>
        ))}

        <select
          value={filters.state}
          onChange={(e) => onChange({ ...filters, state: e.target.value })}
          className="ml-auto rounded-full border border-brand-brown/20 bg-white px-4 py-1.5 text-sm font-medium text-brand-brown"
        >
          <option value="all">All States</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {EVENT_TYPES.map((event) => (
          <button
            key={event.id}
            onClick={() => toggleEvent(event.id)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${filters.eventTypes.includes(event.id) ? 'border-transparent text-white' : 'border-brand-brown/20 text-brand-brown/70 hover:border-brand-brown/40'}`}
            style={filters.eventTypes.includes(event.id) ? { backgroundColor: event.color } : {}}
          >
            {event.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-brown/50">Status</span>
        {(Object.keys(STATUS_META) as ReportStatus[]).map((status) => (
          <label key={status} className="flex items-center gap-2 text-sm text-brand-brown">
            <input type="checkbox" checked={filters.statuses.includes(status)} onChange={() => toggleStatus(status)} className="h-4 w-4 rounded accent-brand-brown" />
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: STATUS_META[status].color }} />
              {STATUS_META[status].label}
            </span>
          </label>
        ))}

        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search location or keyword…"
          className="ml-auto min-w-[200px] flex-1 rounded-full border border-brand-brown/20 px-4 py-1.5 text-sm placeholder:text-brand-brown/40 focus:outline-none focus:ring-2 focus:ring-brand-brown/30"
        />
      </div>
    </div>
  )
}