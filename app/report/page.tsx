import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ReportForm from '@/components/report/ReportForm'

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-brand-clay">
      <Navbar variant="solid" />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-center font-body text-sm uppercase tracking-widest text-brand-brown/50">रिपोर्ट करें · Report Weather</p>
        <h1 className="mt-2 text-center font-heading text-3xl font-bold text-brand-brown md:text-4xl">Tell us what you&apos;re seeing</h1>
        <p className="mx-auto mt-3 max-w-xl text-center font-body text-sm text-brand-brown/70">
          Every report is checked against live sensor data and other nearby reports before it appears on the public dashboard — usually within a minute.
        </p>

        <div className="mt-10">
          <ReportForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}