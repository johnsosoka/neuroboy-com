'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu as MenuIcon, X, ChevronDown } from 'lucide-react'
import { Menu } from '@headlessui/react'

interface NavLink {
  href: string
  label: string
}

interface NavItem {
  type: 'link' | 'dropdown'
  label: string
  href?: string
  items?: NavLink[]
}

const navItems: NavItem[] = [
  { type: 'link', label: 'Home', href: '/' },
  {
    type: 'dropdown',
    label: 'His Life',
    items: [
      { href: '/timeline', label: 'Timeline' },
      { href: '/sailing', label: 'Sailing' },
      { href: '/hiking-outdoors', label: 'Hiking & Outdoors'},
      { href: '/art', label: 'Art & Community' },
    ],
  },
  {
    type: 'dropdown',
    label: 'His Work',
    items: [
      { href: '/tag', label: 'TAG'},
      { href: '/davidson', label: 'Davidson & Associates' },
      { href: '/neurosmith', label: 'Neurosmith' },
      { href: '/ugobe', label: 'Ugobe' },

    ],
  },
  {
    type: 'dropdown',
    label: 'Showcase',
    items: [
      { href: '/gallery/products', label: 'Product Gallery' },
      // { href: '/gallery/photos', label: 'Photos' },
      { href: '/artifacts', label: 'Artifacts Exhibit' },
      { href: '/talks', label: 'Talks & Presentations' },
      { href: '/press', label: 'Press & Awards' },
    ],
  },
  {
    type: 'dropdown',
    label: 'Community',
    items: [
      { href: '/stories', label: 'Stories' },
      { href: '/artifacts-submit', label: 'Submit Artifact' },
      { href: '/guestbook', label: 'Guestbook' },
    ],
  },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActivePath = (href: string) => pathname === href

  const isActiveDropdown = (items?: NavLink[]) => {
    return items?.some(item => pathname === item.href) ?? false
  }

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
            {navItems.map((item, index) => {
              if (item.type === 'link' && item.href) {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                        : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              if (item.type === 'dropdown' && item.items) {
                return (
                  <Menu as="div" key={index} className="relative">
                    <Menu.Button
                      className={`px-4 py-2 rounded-md transition-colors flex items-center gap-1 ${
                        isActiveDropdown(item.items)
                          ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                          : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-memorial-gray-900 border border-memorial-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <Menu.Item key={subItem.href}>
                            {({ active }) => (
                              <Link
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm transition-colors ${
                                  isActivePath(subItem.href)
                                    ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                                    : active
                                    ? 'bg-memorial-gray-800 text-memorial-gray-50'
                                    : 'text-memorial-gray-300'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>
                )
              }

              return null
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-memorial-gray-300 hover:text-memorial-gray-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item, index) => {
              if (item.type === 'link' && item.href) {
                return (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                        : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              if (item.type === 'dropdown' && item.items) {
                return (
                  <div key={index} className="space-y-1">
                    <div className="px-4 py-2 text-xs font-semibold text-memorial-gray-500 uppercase tracking-wider">
                      {item.label}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block pl-8 pr-4 py-2 rounded-md transition-colors ${
                          isActivePath(subItem.href)
                            ? 'bg-memorial-gray-800 text-memorial-accent-blue'
                            : 'text-memorial-gray-300 hover:bg-memorial-gray-900 hover:text-memorial-gray-50'
                        }`}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )
              }

              return null
            })}
          </div>
        )}
      </div>
    </nav>
  )
}
