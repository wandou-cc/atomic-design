// import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <span className="text-primary mb-2 inline-block">Revolutionary Web3 Infrastructure</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            The Future of RWA
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Introducing NSR (New Silk Road) - A groundbreaking protocol that combines Bitcoin-level security with Ethereum-like programmability
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={staggerChildren}
        >
          <motion.div
            className="bg-dark-100 p-8 rounded-2xl"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(204, 255, 0, 0.1)"
            }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Hybrid Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Our innovative approach maintains complete decentralization at the token layer while implementing centralized efficiency at the application layer. This unique architecture enables enterprise-grade performance without compromising security.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-100 p-8 rounded-2xl"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(204, 255, 0, 0.1)"
            }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400 leading-relaxed">
                NSR is designed with regulatory frameworks in mind, ensuring seamless integration with existing financial systems while maintaining the benefits of blockchain technology. Our protocol adheres to international compliance standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-100 p-8 rounded-2xl"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(204, 255, 0, 0.1)"
            }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Proprietary Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                While our core technology remains confidential due to intellectual property considerations, we are committed to progressive disclosure aligned with our development milestones. This approach ensures both innovation protection and community transparency.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-100 p-8 rounded-2xl relative overflow-hidden group"
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 30px -15px rgba(204, 255, 0, 0.1)"
            }}
          >
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                NSR leverages cutting-edge cryptographic techniques and distributed systems to achieve unprecedented levels of security, scalability, and interoperability. Our solution represents a quantum leap in blockchain infrastructure.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Technical specifications and implementation details will be released according to our development roadmap.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-dark-100/50 backdrop-blur-sm p-8 rounded-2xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Workflow Integration</h3>
            <p className="text-gray-400 mb-8">
              Seamlessly connect with traditional financial infrastructure and RWA management systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-dark-200 rounded-xl flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300 group">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
                    <path d="M10 9h4M10 12h4" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Real Estate</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-dark-200 rounded-xl flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300 group">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 3L4 7v10l8 4 8-4V7l-8-4z" />
                    <path d="M12 7l8-4M12 7v10M12 7L4 3M4 7l8 4M4 7v10l8 4" />
                    <circle cx="12" cy="7" r="1" fill="currentColor" />
                    <circle cx="12" cy="17" r="1" fill="currentColor" />
                    <circle cx="4" cy="7" r="1" fill="currentColor" />
                    <circle cx="20" cy="7" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Blockchain</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-dark-200 rounded-xl flex items-center justify-center p-3 hover:scale-110 transition-transform duration-300 group">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-10 h-10 text-primary group-hover:text-primary/80 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 5h16M4 19h16M4 12h16M8 19V5M16 19V5" />
                    <path d="M12 8v8M9 10v4M15 10v4" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Finance</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-dark-100/50 backdrop-blur-sm p-8 rounded-2xl"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Real-time Collaboration</h3>
            <p className="text-gray-400 mb-8">
              Connect with asset managers, validators, and regulatory compliance teams in real-time.
            </p>
            <div className="flex items-center justify-end space-x-[-12px]">
              <div className="w-12 h-12 rounded-full border-2 border-dark-100 bg-dark-200 overflow-hidden relative hover:z-10 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full text-primary/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="18" cy="12" r="6" />
                  <path d="M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12" />
                  <path d="M13 11h10M16 15h4" strokeLinecap="round" />
                </svg>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-dark-100 bg-dark-200 overflow-hidden relative hover:z-10 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full text-primary/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="18" cy="12" r="6" />
                  <path d="M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12" />
                  <path d="M15 12l3-3 3 3M18 9v6" strokeLinecap="round" />
                </svg>
              </div>

              <div className="w-12 h-12 rounded-full border-2 border-dark-100 bg-dark-200 overflow-hidden relative hover:z-10 hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full text-primary/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="18" cy="12" r="6" />
                  <path d="M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12" />
                  <path d="M14 12h8M14 9h8M14 15h8" strokeLinecap="round" />
                </svg>
              </div>

              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary text-sm font-medium hover:z-10 hover:scale-110 transition-transform duration-300">
                <svg
                  viewBox="0 0 36 36"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                  <circle cx="18" cy="18" r="2" fill="currentColor" />
                  <circle cx="24" cy="18" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 