const stats = [
  { value: '255 / 274', label: 'दिन भारी मौसम की चपेट में', sub: 'days of extreme weather in 2024' },
  { value: '3,238+', label: 'जानें प्रभावित', sub: 'lives lost to extreme weather in 2024' },
  { value: '491 M', label: 'सोशल मीडिया उपयोगकर्ता', sub: 'Indians who could be first responders with data' },
  { value: '≤ 60s', label: 'रिपोर्ट से डैशबोर्ड तक', sub: 'target time from report to verified dashboard' },
]

export default function StatsSection() {
  return (
    <section id="stats" className="bg-brand-brown px-6 py-20 text-brand-cream">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-body text-sm uppercase tracking-widest text-brand-cream/70">
          समस्या · The Problem
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold md:text-4xl">
          Weather reports are everywhere.
          <br className="hidden md:block" /> Verified ones aren&apos;t.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-heading text-3xl font-extrabold md:text-4xl">{stat.value}</p>
              <p className="mt-2 font-devanagari text-sm text-brand-cream/90">{stat.label}</p>
              <p className="mt-1 font-body text-xs text-brand-cream/60">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}