'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/biography', label: 'Biography' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/stories', label: 'Stories' },
  { href: '/guestbook', label: 'Guestbook' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-memorial-darker/95 backdrop-blur-sm border-b border-memorial-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Title */}
          <Link
            href="/"
            className="text-xl font-bold text-memorial-gray-50 hover:text-memorial-accent-blue transition-colors"
          >
            John R. Sosoka II
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                    : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-memorial-gray-300 hover:text-memorial-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                    : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
