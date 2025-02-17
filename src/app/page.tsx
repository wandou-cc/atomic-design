'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import dynamic from 'next/dynamic'

const sectionVariants = {
  hidden: { 
    opacity: 0,
    y: 100,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15
    }
  }
}

const Fundraising = dynamic(() => import('@/components/sections/Fundraising'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Careers = dynamic(() => import('@/components/sections/Careers'))

export default function Home() {
  return (
    <main className="overflow-hidden">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <Features />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <Testimonials />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <FAQ />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <Careers />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.2,
          margin: "-100px"
        }}
        variants={sectionVariants}
      >
        <Fundraising />
      </motion.section>
    </main>
  )
}
