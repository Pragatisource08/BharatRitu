import { Report } from '@/lib/mockReports'

export default function StatsBar({ reports, totalBeforeFilters }: { reports: Report[]; totalBeforeFilters: number }) {
  const verified = reports.filter((r) => r.status === 'verified').length
  const underReview = reports.filter((r) => r.status === 'under_review').length
  const flagged = reports.filter((r) => r.status === 'flagged').length
  const duplicatesMerged = reports.reduce((sum, r) => sum + Math.max(r.reportCount - r.authorCount, 0), 0)

  const cards = [
    { label: 'Total Reports', value: totalBeforeFilters, color: undefined },
    { label: 'Verified', value: verified, color: '#22C55E' },
    { label: 'Under Review', value: underReview, color: '#F5A623' },
    { label: 'Flagged Fake', value: flagged, color: '#EF4444' },
    { label: 'Duplicates Merged', value: duplicatesMerged, color: undefined },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map((card) => (
        <div key={card.label} className="rounded-2xl border border-brand-brown/10 bg-white p-4 text-center">
          <p className="font-heading text-2xl font-extrabold" style={{ color: card.color ?? '#4A3324' }}>
            {card.value}
          </p>
          <p className="mt-1 text-xs font-medium text-brand-brown/60">{card.label}</p>
        </div>
      ))}
    </div>
  )
}