import { ReactNode } from 'react'

export default function GlassPanel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 ${className}`}
    >
      {children}
    </div>
  )
}