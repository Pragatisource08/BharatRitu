import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import GlassPanel from '@/components/GlassPanel'

const legend = [
  { color: 'bg-emerald-400', label: 'Verified' },
  { color: 'bg-amber-400', label: 'Under Review' },
  { color: 'bg-rose-400', label: 'Flagged' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.jpg"
          alt="Mountains and forest under a changing sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-brand-brown/95" />
      </div>

      <Navbar />

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <GlassPanel className="translate-y-4 w-full max-w-3xl px-8 py-8 text-center md:px-16 md:py-10">
          <span className="inline-block rounded-full bg-white px-5 py-2 text-xs font-semibold text-brand-brown md:text-sm">
            राष्ट्रीय मौसम मंच · National Weather Platform
          </span>

          <p className="mt-4 font-body text-sm text-white/80 md:text-base">
            संपूर्ण भारत के लिए वास्तविक समय की सत्यापित मौसम रिपोर्ट
          </p>

          <h1 className="mt-2 font-heading text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Bharat <span className="font-devanagari">ऋतु</span>
          </h1>

          <div className="mx-auto mt-4 h-px w-24 bg-white/50" />

          <p className="mx-auto mt-4 max-w-xl font-body text-base text-white/90 md:text-lg">
            Every rain, flood, heatwave and storm — reported by citizens, checked
            against live sensor data, and verified within a minute.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-full bg-white px-7 py-3 font-semibold text-brand-brown transition hover:bg-white/90"
            >
              Live Dashboard देखें
            </Link>
            <Link
              href="/report"
              className="rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Report Weather
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-6">
            {legend.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 text-xs font-medium text-white/80"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                {item.label}
              </span>
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}