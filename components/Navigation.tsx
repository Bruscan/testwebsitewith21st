'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationItem {
  name: string
  href: string
}

interface NavigationProps {
  logo?: {
    src?: string
    text: string
  }
  navigation?: NavigationItem[]
  loginText?: string
  loginHref?: string
  isDark?: boolean
  isVisible?: boolean
  animationDelay?: string
}

const defaultNavigation: NavigationItem[] = [
  { name: 'Tjänster', href: '#services' },
  { name: 'Lösningar', href: '#solutions' },
  { name: 'Teknologi', href: '#tech' },
  { name: 'Kontakt', href: '#contact' },
]

export function Navigation({
  logo = { text: 'AI Solutions' },
  navigation = defaultNavigation,
  loginText = 'Kontakta oss',
  loginHref = '#contact',
  isDark = true,
  isVisible = true,
  animationDelay = '0s'
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const textColor = isDark ? 'text-white' : 'text-gray-900'
  const mutedColor = isDark ? 'text-gray-300' : 'text-gray-600'
  const hoverColor = isDark ? 'hover:text-gray-300' : 'hover:text-gray-900'

  return (
    <>
      <header
        className={`absolute inset-x-0 top-0 z-50 ${isVisible ? 'slide-down-in' : 'opacity-0'}`}
        style={{ animationDelay }}
      >
        <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className={`text-xl font-bold ${textColor}`}>
                {logo.text}
              </span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${mutedColor} ${hoverColor} transition-colors`}
            >
              <span className="sr-only">Öppna meny</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>

          {navigation && navigation.length > 0 && (
            <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold ${textColor} ${hoverColor} transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {loginText && loginHref && (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href={loginHref}
                className={`text-sm font-semibold ${textColor} ${hoverColor} transition-colors`}
              >
                {loginText} <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] menu-slide-in">
          {/* Header with close button */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <span className="text-xl font-bold text-white">{logo.text}</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu items */}
          <nav className="p-6 pt-8">
            <div className="space-y-1">
              {navigation?.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xl font-semibold text-white/90 hover:text-white hover:bg-white/5 px-4 py-4 rounded-lg transition-all menu-item-fade"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {loginText && loginHref && (
              <a
                href={loginHref}
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-8 px-6 py-4 text-center text-black bg-white hover:bg-white/90 rounded-full font-bold transition-all menu-item-fade"
                style={{ animationDelay: `${0.1 + (navigation?.length || 0) * 0.1}s` }}
              >
                {loginText}
              </a>
            )}
          </nav>
        </div>
      )}
    </>
  )
}

export type { NavigationProps, NavigationItem }
