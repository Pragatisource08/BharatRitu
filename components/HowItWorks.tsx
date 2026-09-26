import { Radio, ShieldCheck, LayoutDashboard } from 'lucide-react'

const steps = [
  {
    icon: Radio,
    title: 'Collect',
    hindi: 'एकत्रीकरण',
    description:
      'Posts tagged #IMD and other weather hashtags, news RSS, citizen reports and live Open-Meteo readings are pulled in continuously.',
  },
  {
    icon: ShieldCheck,
    title: 'Verify',
    hindi: 'सत्यापन',
    description:
      'Each report is checked against sensor data, source trust, corroboration and media history to get an explainable credibility score.',
  },
  {
    icon: LayoutDashboard,
    title: 'Visualise',
    hindi: 'प्रस्तुति',
    description:
      'Verified reports appear on a live map and feed within a minute, filterable by date, event, location and status.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-brand-cream px-6 py-20 text-brand-brown">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-body text-sm uppercase tracking-widest text-brand-brown/60">
          कैसे काम करता है · How It Works
        </p>
        <h2 className="mt-3 text-center font-heading text-3xl font-bold md:text-4xl">
          From a citizen&apos;s post to a verified report
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-brand-brown/10 bg-white p-8 shadow-sm"
            >
              <span className="font-heading text-sm font-bold text-brand-brown/30">
                0{index + 1}
              </span>
              <step.icon className="mt-4 h-9 w-9 text-brand-brown" strokeWidth={1.75} />
              <h3 className="mt-4 font-heading text-xl font-bold">
                {step.title}{' '}
                <span className="font-devanagari text-base font-medium text-brand-brown/70">
                  · {step.hindi}
                </span>
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-brand-brown/75">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}