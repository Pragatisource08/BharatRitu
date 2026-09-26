'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Report } from '@/lib/mockReports'
import { EVENT_TYPES, STATUS_META } from '@/lib/constants'

function eventColor(eventType: string) {
  return EVENT_TYPES.find((e) => e.id === eventType)?.color ?? '#4A3324'
}

function FlyToSelected({ report }: { report: Report | null }) {
  const map = useMap()
  useEffect(() => {
    if (report) {
      map.flyTo([report.lat, report.lng], 7, { duration: 0.6 })
    }
  }, [report, map])
  return null
}

export default function MapView({
  reports,
  selectedId,
  onSelect,
}: {
  reports: Report[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  const selected = reports.find((r) => r.id === selectedId) ?? null

  return (
    <MapContainer center={[22.5, 80]} zoom={5} scrollWheelZoom className="h-full w-full rounded-2xl">
      <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {reports.map((report) => (
        <CircleMarker
          key={report.id}
          center={[report.lat, report.lng]}
          radius={6 + Math.min(report.reportCount / 5, 10)}
          pathOptions={{
            color: eventColor(report.eventType),
            fillColor: eventColor(report.eventType),
            fillOpacity: report.id === selectedId ? 0.9 : 0.55,
            weight: report.id === selectedId ? 3 : 1,
          }}
          eventHandlers={{ click: () => onSelect(report.id) }}
        >
          <Popup>
            <p style={{ fontWeight: 600 }}>{report.locality}, {report.district}</p>
            <p style={{ fontSize: 12, color: '#666' }}>
              {STATUS_META[report.status].label} · {Math.round(report.credibility * 100)}% credible
            </p>
          </Popup>
        </CircleMarker>
      ))}
      <FlyToSelected report={selected} />
    </MapContainer>
  )
}