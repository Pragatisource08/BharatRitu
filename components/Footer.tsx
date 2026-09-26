import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-brown px-6 py-10 text-brand-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg font-bold text-white">
            Bharat <span className="font-devanagari">ऋतु</span>
          </p>
          <p className="mt-1 font-body text-xs text-brand-cream/60">
            एक विश्वसनीय स्रोत, संपूर्ण भारत के लिए · One verified source, for all of India
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          <Link href="/report" className="hover:text-white">Report Weather</Link>
          <a href="#how-it-works" className="hover:text-white">How It Works</a>
        </div>
      </div>

      <p className="mt-8 text-center font-body text-xs text-brand-cream/50">
        © {new Date().getFullYear()} Bharat Ritu. Built for a safer, better-informed India.
      </p>
    </footer>
  )
}