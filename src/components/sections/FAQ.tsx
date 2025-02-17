'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    id: 1,
    question: "What is RWA and how does it benefit the blockchain ecosystem?",
    answer: `RWA (Real World Assets) refers to the tokenization of tangible assets on blockchain networks.
    Key benefits include:
    • Enhanced liquidity for traditional assets
    • Reduced transaction costs and intermediary fees
    • Fractional ownership capabilities
    • Increased market accessibility and inclusivity
    • Transparent price discovery mechanisms
    
    Our protocol enables seamless integration between traditional finance and DeFi, creating a more efficient market infrastructure.`
  },
  {
    id: 2,
    question: "What are the current challenges in the RWA market?",
    answer: `The RWA market faces several key challenges:
    • Regulatory compliance uncertainty
    • On-chain to off-chain asset mapping mechanisms
    • Standardization of valuation methodologies
    • Cross-border legal frameworks
    • Market liquidity infrastructure
    
    NSR addresses these challenges through our innovative hybrid architecture and regulatory-first approach.`
  },
  {
    id: 3,
    question: "How does NSR ensure transaction security and decentralization?",
    answer: `NSR implements a multi-layered security architecture:
    • Multi-stage smart contract auditing
    • Distributed custodial mechanisms
    • On-chain governance protocols
    • Real-time monitoring and risk assessment systems
    • Multi-signature authorization framework
    
    Our security model combines the robustness of traditional finance with the innovation of blockchain technology.`
  },
  {
    id: 4,
    question: "What role does the \"Trade-to-Earn\" mechanism play in the NSR ecosystem?",
    answer: `The NSR Trade-to-Earn mechanism is designed to:
    • Incentivize early adopter participation
    • Enhance market liquidity depth
    • Distribute governance rights equitably
    • Foster community-driven ecosystem development
    • Optimize supply-demand dynamics
    
    This mechanism ensures sustainable growth while maintaining market efficiency.`
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary mb-2 inline-block">常见问题</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            我们已经为您解答
          </h2>
          <p className="text-gray-400 text-lg">
            了解更多关于 NSR 协议和 RWA 生态系统的信息
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-dark-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-dark-200 transition-colors duration-300"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 