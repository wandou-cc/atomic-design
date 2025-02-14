import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    avatar: '/images/avatars/expert1.jpg',
    quote: "NSR's approach to tokenizing real-world assets is revolutionary. Their infrastructure could fundamentally change how we think about asset ownership and transfer in the digital age.",
    name: "Dr. Michael Chen",
    title: "Asset Tokenization Expert",
    rating: 5
  },
  {
    id: 2,
    avatar: '/images/avatars/expert2.jpg',
    quote: "The way NSR bridges traditional assets with blockchain technology is impressive. This could be the key to bringing trillions of dollars of real-world assets into the digital ecosystem.",
    name: "Sarah Anderson",
    title: "Digital Markets Strategist",
    rating: 5
  },
  {
    id: 3,
    avatar: '/images/avatars/expert3.jpg',
    quote: "What sets NSR apart is their understanding of both traditional asset markets and blockchain capabilities. Their solution could revolutionize how we handle real-world asset transactions.",
    name: "Prof. James Wilson",
    title: "Market Infrastructure Specialist",
    rating: 5
  },
  {
    id: 4,
    avatar: '/images/avatars/expert4.jpg',
    quote: "The potential impact of NSR on real estate, commodities, and other traditional assets is enormous. Their platform could create unprecedented liquidity for previously illiquid assets.",
    name: "Dr. Elena Martinez",
    title: "Asset Management Innovator",
    rating: 5
  },
  {
    id: 5,
    avatar: '/images/avatars/expert5.jpg',
    quote: "NSR's infrastructure could transform how we think about asset fractionalization and ownership. This is exactly what the RWA sector has been waiting for.",
    name: "Dr. Robert Zhang",
    title: "Investment Technology Advisor",
    rating: 5
  },
  {
    id: 6,
    avatar: '/images/avatars/expert6.jpg',
    quote: "The integration of real-world assets into DeFi has always been challenging, but NSR's approach provides a clear path forward. This could be the bridge traditional finance has been looking for.",
    name: "Dr. Amanda Parker",
    title: "RWA Integration Specialist",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-dark-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary mb-2 inline-block">Industry Recognition</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            Expert Insights
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading experts in asset tokenization and financial innovation share their perspectives on NSR's RWA solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-dark-100 p-8 rounded-2xl hover:bg-dark-200 transition-colors duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-primary" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-400 mb-8 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Expert Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 