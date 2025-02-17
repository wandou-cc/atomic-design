import './globals.css'
import '@/styles/scrollbar.css'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import CookieConsent from '@/components/common/CookieConsent'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'NSR Protocol - Bridging Traditional Finance with Web3',
  description: 'New Silk Road Protocol combines Bitcoin-level security with Ethereum-like programmability, enabling seamless integration of real-world assets into the blockchain ecosystem.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-100`}>
        <Header />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
