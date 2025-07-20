'use client'

import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { menuItems } from '@/lib/constants/navigation'

export const Header = () => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header suppressHydrationWarning>
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl px-6 rounded-2xl border border-[rgb(229,208,255)]/0 transition-all duration-300 lg:px-12',
            mounted &&
              isScrolled &&
              'bg-[#0a0a0a]/50 max-w-4xl rounded-2xl border border-[rgb(229,208,255)]/20 backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex items-center justify-between py-3 lg:py-4">
            <Link
              href="/"
              aria-label="home"
              className="relative group"
              suppressHydrationWarning
            >
              <span
                className="relative text-2xl font-montserrat font-bold tracking-wide transition-all duration-300 group-hover:opacity-80 text-white"
                style={{
                  fontSize: 'clamp(1.5rem, 2vw, 2.25rem)',
                }}
              >
                Dovira
              </span>
            </Link>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="duration-150 transition-colors text-[#BCBCBC] hover:text-[rgb(229,208,255)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block relative h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none">
              {mounted && (
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,rgb(229,208,255)_85%,transparent_100%)]" />
              )}
              <Button
                asChild
                size="sm"
                variant="ghost"
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0a0a0a]/90 text-white hover:bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-lg transition-all duration-300"
              >
                <Link
                  href="https://calendly.com/khalidcapron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center py-4 px-3"
                >
                  Réserver un appel
                </Link>
              </Button>
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
            >
              <Menu
                className={cn(
                  'm-auto size-6 duration-200',
                  menuState && 'rotate-180 scale-0 opacity-0',
                  'text-white'
                )}
              />
              <X
                className={cn(
                  'absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200',
                  menuState && 'rotate-0 scale-100 opacity-100',
                  'text-white'
                )}
              />
            </button>
          </div>

          <AnimatePresence>
            {menuState && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden"
              >
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="mb-6 w-full rounded-2xl border p-6 mt-4 bg-[#0a0a0a]/90 border-[rgb(229,208,255)]/20 backdrop-blur-lg"
                >
                  <ul className="space-y-6 text-base">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuState(false)}
                          className="block duration-150 transition-colors text-[#BCBCBC] hover:text-[rgb(229,208,255)]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none mt-8">
                    {mounted && (
                      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_70%,rgb(229,208,255)_85%,transparent_100%)]" />
                    )}
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0a0a0a]/90 text-white hover:bg-[#0a0a0a]/95 backdrop-blur-3xl shadow-lg transition-all duration-300"
                    >
                      <Link
                        href="https://calendly.com/khalidcapron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center py-4 px-3"
                      >
                        Réserver un appel
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
