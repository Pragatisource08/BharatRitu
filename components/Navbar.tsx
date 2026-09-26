'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#stats', label: 'The Problem' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-baseline gap-1.5 text-white">
          <span className="font-heading text-xl font-bold">Bharat</span>
          <span className="font-devanagari text-xl font-bold">ऋतु</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/85 transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/report" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-brown transition hover:bg-white/90">
            Report Weather
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="mx-6 mt-2 flex flex-col gap-4 rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-lg md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm font-medium text-white/90">
              {link.label}
            </Link>
          ))}
          <Link href="/report" className="rounded-full bg-white px-5 py-2 text-center text-sm font-semibold text-brand-brown">
            Report Weather
          </Link>
        </div>
      )}
    </header>
  )
}