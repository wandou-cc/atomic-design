'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type SenderType = 'user' | 'atomic'

interface Message {
  id: number
  text: string
  sender: SenderType
  initial?: string
}

const messages: Message[] = [
  {
    id: 1,
    text: "Could you explain NSR Protocol's hybrid architecture?",
    sender: 'user',
    initial: 'D'
  },
  {
    id: 2,
    text: "NSR combines Layer-1 security with Layer-2 scalability. We utilize PoW consensus for asset security while implementing optimistic rollups for high throughput.",
    sender: 'atomic'
  },
  {
    id: 3,
    text: "How does NSR handle real-world asset tokenization?",
    sender: 'user',
    initial: 'D'
  },
  {
    id: 4,
    text: "Our protocol provides standardized templates for RWA tokenization, with built-in compliance frameworks and real-time settlement capabilities. This enables seamless integration of traditional assets.",
    sender: 'atomic'
  },
  {
    id: 5,
    text: "What about cross-chain interoperability?",
    sender: 'user',
    initial: 'D'
  },
  {
    id: 6,
    text: "NSR features native cross-chain bridges, supporting major networks like Bitcoin and Ethereum. This allows for efficient asset transfer and liquidity across different blockchains.",
    sender: 'atomic'
  },
  {
    id: 7,
    text: "Can you share some performance metrics?",
    sender: 'user',
    initial: 'D'
  },
  {
    id: 8,
    text: "Our hybrid architecture achieves 5000+ TPS with sub-second finality, while maintaining Bitcoin-level security. We've also achieved 90% cost reduction in settlement processes.",
    sender: 'atomic'
  }
]

export default function ChatAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([])
  const [isAnimating, setIsAnimating] = useState(true)

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout | null = null

    const showNextMessage = () => {
      if (currentIndex < messages.length) {
        setVisibleMessages(prev => [...prev].concat(messages[currentIndex]))
        currentIndex++
        
        if (currentIndex < messages.length) {
          timeoutId = setTimeout(() => {
            scrollToBottom()
            showNextMessage()
          }, currentIndex % 2 === 0 ? 3000 : 2000)
        } else {
          setIsAnimating(false)
        }
      }
    }

    showNextMessage()

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  if (!isAnimating && visibleMessages.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div 
        ref={containerRef}
        className="h-[300px] sm:h-[350px] lg:h-[400px] overflow-y-auto scrollbar-hide"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 10px, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10px, black 90%, transparent)'
        }}
      >
        <div className="px-2 py-4">
          <AnimatePresence mode="wait">
            {visibleMessages.filter(Boolean).map((message: Message) => {
              if (!message?.id || !message?.text || !message?.sender) return null;
              
              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-start gap-2 sm:gap-4 mb-3 sm:mb-4 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'atomic' && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xs sm:text-base">
                      A
                    </div>
                  )}
                  <div
                    className={`max-w-[240px] sm:max-w-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
                      message.sender === 'user'
                        ? 'bg-primary text-black'
                        : 'bg-dark-100 text-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm">{message.text}</p>
                  </div>
                  {message.sender === 'user' && message.initial && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-violet-500 flex items-center justify-center text-white font-medium text-xs sm:text-base">
                      {message.initial}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  )
} 