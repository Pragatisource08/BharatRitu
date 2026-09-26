export const EVENT_TYPES = [
  { id: 'rainfall', label: 'Rainfall', hindi: 'बारिश', color: '#3B82F6' },
  { id: 'thunderstorm', label: 'Thunderstorm', hindi: 'आंधी-तूफान', color: '#6366F1' },
  { id: 'flood', label: 'Flood', hindi: 'बाढ़', color: '#0EA5E9' },
  { id: 'heatwave', label: 'Heatwave', hindi: 'लू', color: '#F97316' },
  { id: 'fog', label: 'Fog', hindi: 'कोहरा', color: '#94A3B8' },
  { id: 'dust_storm', label: 'Dust Storm', hindi: 'धूल भरी आंधी', color: '#CA8A04' },
  { id: 'strong_wind', label: 'Strong Wind', hindi: 'तेज़ हवा', color: '#14B8A6' },
] as const

export const STATUS_META = {
  verified: { label: 'Verified', color: '#22C55E' },
  under_review: { label: 'Under Review', color: '#F5A623' },
  flagged: { label: 'Flagged Fake', color: '#EF4444' },
} as const

export type EventType = (typeof EVENT_TYPES)[number]['id']
export type ReportStatus = keyof typeof STATUS_META