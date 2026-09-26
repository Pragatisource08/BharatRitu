'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FiltersBar, { FiltersState, DatePreset } from '@/components/dashboard/FiltersBar'
import StatsBar from '@/components/dashboard/StatsBar'
import LiveFeed from '@/components/dashboard/LiveFeed'
import ChartsSection from '@/components/dashboard/ChartsSection'
import { MOCK_REPORTS } from '@/lib/mockReports'

const MapView = dynamic(() => import('@/components/dashboard/MapView'), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center rounded-2xl bg-brand-cream text-sm text-brand-brown/50">Loading map…</div>,
})

const DATE_PRESET_MINUTES: Record<DatePreset, number> = {
  last_hour: 60,
  today: 60 * 24,
  '7d': 60 * 24 * 7,
  '30d': 60 * 24 * 30,
}

export default function DashboardPage() {
  const states = useMemo(() => Array.from(new Set(MOCK_REPORTS.map((r) => r.state))).sort(), [])

  const [filters, setFilters] = useState<FiltersState>({
    datePreset: '7d',
    eventTypes: [],
    statuses: ['verified'],
    state: 'all',
    search: '',
  })

  const [selectedId, setSelectedId] = useState<string | null>(null)

  const filteredReports = useMemo(() => {
    return MOCK_REPORTS.filter((r) => {
      if (r.minutesAgo > DATE_PRESET_MINUTES[filters.datePreset]) return false
      if (filters.eventTypes.length > 0 && !filters.eventTypes.includes(r.eventType)) return false
      if (filters.statuses.length > 0 && !filters.statuses.includes(r.status)) return false
      if (filters.state !== 'all' && r.state !== filters.state) return false
      if (filters.search.trim() && !`${r.locality} ${r.district} ${r.state} ${r.text}`.toLowerCase().includes(filters.search.trim().toLowerCase())) return false
      return true
    })
  }, [filters])

  return (
    <main className="min-h-screen bg-brand-clay">
      <Navbar variant="solid" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="font-body text-sm uppercase tracking-widest text-brand-brown/50">लाइव डैशबोर्ड · Live Dashboard</p>
          <h1 className="mt-2 font-heading text-3xl font-bold text-brand-brown md:text-4xl">What India is reporting, right now</h1>
        </div>

        <div className="space-y-6">
          <FiltersBar filters={filters} onChange={setFilters} states={states} />
          <StatsBar reports={filteredReports} totalBeforeFilters={MOCK_REPORTS.length} />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="h-[520px] lg:col-span-2">
              <MapView reports={filteredReports} selectedId={selectedId} onSelect={setSelectedId} />
            </div>
            <div className="h-[520px]">
              <LiveFeed reports={filteredReports} selectedId={selectedId} onSelect={setSelectedId} />
            </div>
          </div>

          <ChartsSection reports={filteredReports} />
        </div>
      </div>

      <Footer />
    </main>
  )
}