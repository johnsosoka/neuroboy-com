import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'John R. Sosoka Jr - Memorial',
  description: 'Memorial website for John R. Sosoka Jr (1953-2021) - Pioneer, Technologist, Mentor, Neuroboy',
  keywords: ['John Sosoka', 'Neuroboy', 'Pleo', 'Ugobe', 'Neurosmith', 'Robotics', 'Memorial'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
