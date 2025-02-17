import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "NSR&apos;s innovative approach to blockchain infrastructure has revolutionized our asset management process.",
      name: "Sarah Chen",
      title: "CTO at Global Assets",
      avatar: "/testimonials/1.jpg"
    },
    {
      id: 2,
      content: "The security and scalability of NSR&apos;s protocol exceeded our expectations. It&apos;s truly enterprise-grade.",
      name: "Michael Zhang",
      title: "Head of Blockchain, TechFin",
      avatar: "/testimonials/2.jpg"
    },
    {
      id: 3,
      content: "We&apos;ve seen a 90% reduction in settlement times since implementing NSR&apos;s solution.",
      name: "David Park",
      title: "Director of Operations",
      avatar: "/testimonials/3.jpg"
    }
  ]

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary mb-2 inline-block">Trusted by Industry Leaders</span>
          <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-100 bg-clip-text text-transparent">
            What Our Partners Say
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Learn how NSR Protocol is transforming the way enterprises handle digital assets and blockchain integration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-dark-100 p-6 rounded-xl">
              <p className="text-gray-400 mb-4">{testimonial.content}</p>
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