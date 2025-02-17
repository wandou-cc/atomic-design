'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Fundraising() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null)

  const handleCopy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopiedAddress(address)
      setTimeout(() => setCopiedAddress(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const cryptoAddresses = [
    {
      name: 'Ethereum (ETH)',
      address: '0x1234...5678',
      icon: (
        <svg 
          className="w-6 h-6"
          viewBox="0 0 2500 2503"
          fill="none"
        >
          <g>
            <path
              d="M1248.7 2501.4v-627.2l-775.9-453.7 775.9 1080.9z"
              fill="#F0CDC2"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
            <path
              d="M1251.3 2501.4v-627.2l775.8-453.7-775.8 1080.9z"
              fill="#C9B3F5"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
            <path
              d="M1248.7 1718.4V917.9L464 1269.3l784.7 449.1z"
              fill="#88AAF1"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
            <path
              d="M1251.3 1718.4V917.9L2036 1269.3l-784.7 449.1z"
              fill="#C9B3F5"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
            <path
              d="M464 1269.3L1248.7 1.6v916.3L464 1269.3z"
              fill="#F0CDC2"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
            <path
              d="M2036 1269.3L1251.3 1.6v916.3L2036 1269.3z"
              fill="#B8FAF6"
              stroke="#1616B4"
              strokeWidth="3.13"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      )
    },
    {
      name: 'Bitcoin (BTC)',
      address: 'bc1q...xyz',
      icon: (
        <svg 
          className="w-6 h-6"
          viewBox="0 0 4091.27 4091.73"
          fill="none"
        >
          <g>
            <path
              fill="#F7931A"
              fillRule="nonzero"
              d="M4030.06 2540.77c-273.24,1096.01 -1383.32,1763.02 -2479.46,1489.71 -1095.68,-273.24 -1762.69,-1383.39 -1489.33,-2479.31 273.12,-1096.13 1383.2,-1763.19 2479,-1489.95 1096.06,273.24 1763.03,1383.51 1489.76,2479.57l0.02 -0.02z"
            />
            <path
              fill="white"
              fillRule="nonzero"
              d="M2947.77 1754.38c40.72,-272.26 -166.56,-418.61 -450,-516.24l91.95 -368.8 -224.5 -55.94 -89.51 359.09c-59.02,-14.72 -119.63,-28.59 -179.87,-42.34l90.16 -361.46 -224.36 -55.94 -92 368.68c-48.84,-11.12 -96.81,-22.11 -143.35,-33.69l0.26 -1.16 -309.59 -77.31 -59.72 239.78c0,0 166.56,38.18 163.05,40.53 90.91,22.69 107.35,82.87 104.62,130.57l-104.74 420.15c6.26,1.59 14.38,3.89 23.34,7.49 -7.49,-1.86 -15.46,-3.89 -23.73,-5.87l-146.81 588.57c-11.11,27.62 -39.31,69.07 -102.87,53.33 2.25,3.26 -163.17,-40.72 -163.17,-40.72l-111.46 256.98 292.15 72.83c54.35,13.63 107.61,27.89 160.06,41.3l-92.9 373.03 224.24 55.94 92 -369.07c61.26,16.63 120.71,31.97 178.91,46.43l-91.69 367.33 224.51 55.94 92.89 -372.33c382.82,72.45 670.67,43.24 791.83,-303.02 97.63,-278.78 -4.86,-439.58 -206.26,-544.44 146.69,-33.83 257.18,-130.31 286.64,-329.61l-0.07 -0.05zm-512.93 719.26c-69.38,278.78 -538.76,128.08 -690.94,90.29l123.28 -494.2c152.17,37.99 640.17,113.17 567.67,403.91zm69.43 -723.3c-63.29,253.58 -453.96,124.75 -580.69,93.16l111.77 -448.21c126.73,31.59 534.85,90.55 468.94,355.05l-0.02 0z"
            />
          </g>
        </svg>
      )
    },
    {
      name: 'USDT',
      address: '0xabcd...efgh',
      icon: (
        <svg 
          className="w-6 h-6"
          viewBox="0 0 339.43 295.27"
        >
          <path 
            d="M62.15,1.45l-61.89,130a2.52,2.52,0,0,0,.54,2.94L167.95,294.56a2.55,2.55,0,0,0,3.53,0L338.63,134.4a2.52,2.52,0,0,0,.54-2.94l-61.89-130A2.5,2.5,0,0,0,275,0H64.45a2.5,2.5,0,0,0-2.3,1.45h0Z" 
            fill="#50af95"
            fillRule="evenodd"
          />
          <path 
            d="M191.19,144.8v0c-1.2.09-7.4,0.46-21.23,0.46-11,0-18.81-.33-21.55-0.46v0c-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25,74.24-18.15v28.91c2.78,0.2,10.74.67,21.74,0.67,13.2,0,19.81-.55,21-0.66v-28.9c42.42,1.89,74.08,9.29,74.08,18.13s-31.65,16.24-74.08,18.12h0Zm0-39.25V79.68h59.2V40.23H89.21V79.68H148.4v25.86c-48.11,2.21-84.29,11.74-84.29,23.16s36.18,20.94,84.29,23.16v82.9h42.78V151.83c48-2.21,84.12-11.73,84.12-23.14s-36.09-20.93-84.12-23.15h0Zm0,0h0Z" 
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 px-4 bg-dark-100/30">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="text-primary mb-2 inline-block">Support Our Vision</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Contribute to the Future of RWA
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your contribution will help accelerate the development of NSR protocol and expand our ecosystem. We are committed to building a more inclusive and efficient financial future.
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-8"
          variants={staggerChildren}
        >
          {/* Development Roadmap */}
          <motion.div 
            className="bg-dark-100 rounded-xl p-6 md:p-8"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-4">Development Roadmap</h3>
            <motion.div 
              className="space-y-4 text-gray-400"
              variants={staggerChildren}
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Protocol Enhancement</h4>
                  <p>Upgrading core protocol features and implementing advanced security measures</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Market Expansion</h4>
                  <p>Establishing partnerships and integrating with major financial institutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-medium text-white">Community Development</h4>
                  <p>Building educational resources and supporting community initiatives</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Donation Addresses */}
          <motion.div 
            className="bg-dark-100 rounded-xl p-6 md:p-8"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-bold mb-6">Contribution Addresses</h3>
            <motion.div 
              className="space-y-6"
              variants={staggerChildren}
            >
              {cryptoAddresses.map((crypto) => (
                <motion.div
                  key={crypto.name}
                  className="flex items-center gap-4"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-dark-200 flex items-center justify-center text-primary">
                    {crypto.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="font-medium mb-1">{crypto.name}</div>
                    <div className="text-gray-400 text-sm font-mono">{crypto.address}</div>
                  </div>
                  <button 
                    onClick={() => handleCopy(crypto.address)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      copiedAddress === crypto.address
                        ? 'bg-primary/20 text-primary'
                        : 'bg-dark-200 text-gray-400 hover:bg-dark-300'
                    }`}
                  >
                    {copiedAddress === crypto.address ? 'Copied!' : 'Copy'}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Transparency Notice */}
          <motion.div 
            className="bg-dark-100/50 rounded-xl p-6"
            variants={fadeInUp}
          >
            <p className="text-gray-400 text-sm text-center">
              All contributions are transparent and trackable on-chain. Funds will be used strictly for protocol development, security audits, and community growth. Regular updates will be provided to our community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 