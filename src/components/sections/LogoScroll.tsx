'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const logos = [
  { 
    id: 1, 
    src: 'https://cryptologos.cc/logos/versions/ethereum-eth-logo-full-horizontal.svg', 
    alt: 'Ethereum',
    width: 140
  },
  { 
    id: 2, 
    src: 'https://cryptologos.cc/logos/versions/bitcoin-btc-logo-full.svg',
    alt: 'btc',
    width: 140
  },
  { 
    id: 3, 
    src: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
    alt: 'solana',
    width: 150
  },
  { 
    id: 4, 
    src: 'https://cryptologos.cc/logos/polygon-matic-logo.svg', 
    alt: 'Polygon',
    width: 140
  },
  { 
    id: 5, 
    src: 'https://cryptologos.cc/logos/tron-trx-logo.svg', 
    alt: 'trx',
    width: 120
  },
  { 
    id: 6, 
    src: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg', 
    alt: 'xrp',
    width: 130
  }
]

export default function LogoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    let scrollPos = 0

    const scroll = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
    }

    const interval = setInterval(scroll, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-12 bg-dark-100/50 backdrop-blur-sm border-t border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Multi-Chain Infrastructure</p>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            {/* Multi-Chain Infrastructure */}
          </h3>
        </div>
        
        <div className="relative">
          {/* 左侧渐变遮罩 */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-100 to-transparent z-10" />
          
          {/* 右侧渐变遮罩 */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-100 to-transparent z-10" />
          
          {/* 滚动容器 */}
          <div 
            ref={scrollRef}
            className="overflow-hidden whitespace-nowrap py-4"
          >
            {/* 第一组 logo */}
            <div className="inline-block">
              {logos.map((logo) => (
                <div
                  key={`original-${logo.id}`}
                  className="inline-block mx-12 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
              ))}
            </div>
            
            {/* 复制一组 logo 实现无缝滚动 */}
            <div className="inline-block">
              {logos.map((logo) => (
                <div
                  key={`clone-${logo.id}`}
                  className="inline-block mx-12 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={40}
                    className="h-8 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 