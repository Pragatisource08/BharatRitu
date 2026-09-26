import type { Metadata } from 'next'
import { Poppins, Inter, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['500', '600', '700'],
  variable: '--font-noto-devanagari',
})

export const metadata: Metadata = {
  title: 'Bharat ऋतु — National Weather Platform',
  description:
    'Real-time, verified weather reports for India — collected from citizens and public sources, checked against live sensor data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${notoDevanagari.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}