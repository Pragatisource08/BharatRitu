'use client'

import { useMemo } from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend } from 'chart.js'
import { Report } from '@/lib/mockReports'
import { EVENT_TYPES } from '@/lib/constants'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend)

export default function ChartsSection({ reports }: { reports: Report[] }) {
  const hourlyBuckets = useMemo(() => {
    const buckets = Array.from({ length: 12 }, () => 0)
    reports.forEach((r) => {
      const hoursAgo = Math.floor(r.minutesAgo / 60)
      if (hoursAgo < 12) buckets[11 - hoursAgo] += 1
    })
    return buckets
  }, [reports])

  const eventCounts = useMemo(() => EVENT_TYPES.map((e) => reports.filter((r) => r.eventType === e.id).length), [reports])

  const topDistricts = useMemo(() => {
    const counts = new Map<string, number>()
    reports.forEach((r) => counts.set(r.district, (counts.get(r.district) ?? 0) + 1))
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5)
  }, [reports])

  const maxDistrict = topDistricts[0]?.[1] ?? 1

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-brand-brown/10 bg-white p-6 lg:col-span-2">
        <h3 className="font-heading text-lg font-bold text-brand-brown">Reports over the last 12 hours</h3>
        <div className="mt-4 h-56">
          <Line
            data={{
              labels: Array.from({ length: 12 }, (_, i) => `${11 - i}h ago`).reverse(),
              datasets: [{ label: 'Reports', data: hourlyBuckets, borderColor: '#4A3324', backgroundColor: 'rgba(74, 51, 36, 0.15)', tension: 0.35, fill: true }],
            }}
            options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-brand-brown/10 bg-white p-6">
        <h3 className="font-heading text-lg font-bold text-brand-brown">Event distribution</h3>
        <div className="mt-4 h-56">
          <Doughnut
            data={{ labels: EVENT_TYPES.map((e) => e.label), datasets: [{ data: eventCounts, backgroundColor: EVENT_TYPES.map((e) => e.color), borderWidth: 0 }] }}
            options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } } } }}
          />
        </div>
      </div>

      <div className="rounded-2xl border border-brand-brown/10 bg-white p-6 lg:col-span-3">
        <h3 className="font-heading text-lg font-bold text-brand-brown">Top districts</h3>
        <div className="mt-4 space-y-3">
          {topDistricts.map(([district, count]) => (
            <div key={district}>
              <div className="flex justify-between text-sm font-medium text-brand-brown">
                <span>{district}</span>
                <span>{count}</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-brand-cream">
                <div className="h-2 rounded-full bg-brand-brown" style={{ width: `${(count / maxDistrict) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}