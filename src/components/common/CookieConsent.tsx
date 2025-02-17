'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const consent = window.localStorage.getItem('cookieConsent')
      console.log('Initial consent status:', consent)
      setShowConsent(consent === null)
    } catch (error) {
      console.error('Error checking consent:', error)
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      console.log('Accepting cookies...')
      window.localStorage.setItem('cookieConsent', 'true')
      setShowConsent(false)
      console.log('Cookies accepted, banner should hide')
    } catch (error) {
      console.error('Error saving consent:', error)
      // 即使保存失败也关闭弹窗
      setShowConsent(false)
    }
  }

  const handleDecline = () => {
    try {
      console.log('Declining cookies...')
      window.localStorage.setItem('cookieConsent', 'false')
      setShowConsent(false)
      console.log('Cookies declined, banner should hide')
    } catch (error) {
      console.error('Error saving consent:', error)
      // 即使保存失败也关闭弹窗
      setShowConsent(false)
    }
  }

  // 如果状态还未初始化，不渲染任何内容
  if (showConsent === null) {
    console.log('Consent status not initialized yet')
    return null
  }

  console.log('Current showConsent state:', showConsent)

  return (
    <AnimatePresence mode="wait" onExitComplete={() => console.log('Exit animation completed')}>
      {showConsent && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-dark-100/95 backdrop-blur-sm border-t border-gray-800 shadow-lg"
        >
          <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm sm:text-base">
                <h3 className="text-white font-medium text-lg mb-2">We value your privacy</h3>
                <p>
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button 
                  onClick={handleDecline}
                  className="px-6 py-2 rounded-lg bg-dark-200 text-gray-400 hover:bg-dark-300 transition-colors"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAccept}
                  className="px-6 py-2 rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 