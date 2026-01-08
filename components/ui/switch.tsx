'use client'

import { cn } from '@/lib/utils'

interface SwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  leftLabel: string
  rightLabel: string
  className?: string
}

export const Switch = ({
  checked,
  onCheckedChange,
  leftLabel,
  rightLabel,
  className,
}: SwitchProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-0 p-0.5 rounded-full bg-[#0f0f0f]/80 border border-[rgb(229,208,255)]/20 backdrop-blur-sm',
        className
      )}
    >
      <button
        onClick={() => onCheckedChange(false)}
        className={cn(
          'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300',
          !checked
            ? 'bg-[rgb(130,50,255)] text-white shadow-sm cursor-default'
            : 'text-[#BCBCBC] hover:text-white cursor-pointer'
        )}
      >
        {leftLabel}
      </button>
      <button
        onClick={() => onCheckedChange(true)}
        className={cn(
          'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300',
          checked
            ? 'bg-[rgb(130,50,255)] text-white shadow-sm cursor-default'
            : 'text-[#BCBCBC] hover:text-white cursor-pointer'
        )}
      >
        {rightLabel}
      </button>
    </div>
  )
}
