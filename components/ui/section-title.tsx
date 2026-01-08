import React from 'react'
import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export const SectionTitle = ({
  children,
  className,
  showAccent = true,
  level = 'h2',
}: {
  children: React.ReactNode
  className?: string
  showAccent?: boolean
  level?: HeadingLevel
}) => {
  const HeadingTag = level as keyof React.JSX.IntrinsicElements

  return (
    <div className="relative">
      {/* Subtle background glow */}
      <div className="absolute -inset-4 bg-[rgb(180,120,255)]/8 blur-2xl rounded-2xl opacity-50" />

      <HeadingTag
        className={cn(
          'relative text-3xl md:text-4xl max-w-xs md:max-w-sm tracking-tighter md:tracking-tight font-semibold',
          className
        )}
        suppressHydrationWarning
        style={{
          background: 'linear-gradient(135deg, rgb(180,120,255) 0%, rgb(200,140,255) 40%, rgb(160,100,255) 70%, rgb(140,80,255) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        {children}
      </HeadingTag>

      {/* Decorative accent - conditionnel */}
      {showAccent && (
        <div className="relative mt-4 flex items-center gap-3">
          <div className="w-12 h-px bg-gradient-to-r from-[rgb(200,140,255)] to-[rgb(180,120,255)]" />
          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[rgb(200,140,255)] to-[rgb(180,120,255)] animate-pulse" />
          <div className="w-8 h-px bg-gradient-to-r from-[rgb(180,120,255)] to-transparent" />
        </div>
      )}
    </div>
  )
}
