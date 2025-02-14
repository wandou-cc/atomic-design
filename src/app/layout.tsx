import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import './globals.css'
import '@/styles/scrollbar.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atomic Design - Design work, the efficient way',
  description: 'Innovative design solutions for technology firms',
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
      </body>
    </html>
  )
}
