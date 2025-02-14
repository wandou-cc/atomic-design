import Image from 'next/image'

export default function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary mb-2 inline-block">Revolutionary Web3 Infrastructure</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            The Future of RWA
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Introducing NSR (New Silk Road) - A groundbreaking protocol that combines Bitcoin-level security with Ethereum-like programmability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-dark-100 p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Hybrid Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Our innovative approach maintains complete decentralization at the token layer while implementing centralized efficiency at the application layer. This unique architecture enables enterprise-grade performance without compromising security.
              </p>
            </div>
          </div>

          <div className="bg-dark-100 p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Regulatory Compliance</h3>
              <p className="text-gray-400 leading-relaxed">
                NSR is designed with regulatory frameworks in mind, ensuring seamless integration with existing financial systems while maintaining the benefits of blockchain technology. Our protocol adheres to international compliance standards.
              </p>
            </div>
          </div>

          <div className="bg-dark-100 p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Proprietary Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                While our core technology remains confidential due to intellectual property considerations, we are committed to progressive disclosure aligned with our development milestones. This approach ensures both innovation protection and community transparency.
              </p>
            </div>
          </div>

          <div className="bg-dark-100 p-8 rounded-2xl relative overflow-hidden group">
            <div className="mb-6 relative z-10">
              <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                NSR leverages cutting-edge cryptographic techniques and distributed systems to achieve unprecedented levels of security, scalability, and interoperability. Our solution represents a quantum leap in blockchain infrastructure.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Technical specifications and implementation details will be released according to our development roadmap.
          </p>
        </div>
      </div>
    </section>
  )
} 