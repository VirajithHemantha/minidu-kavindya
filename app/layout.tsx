import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import './enhancements.css'

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Kavindya & Minindu Wedding',
  description: '2026 ජූලි 04 වන දින පැවැත්වෙන කාවින්ද්යා සහ මිනිඳු ගේ විවාහ මංගල්‍යය සඳහා ඔබ සැම සාදරයෙන් පිළිගනිමු.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
