export default function Stats() {
  return (
    <section id="stats" className="py-24 px-4 bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold mb-2">45+</h3>
            <p className="text-gray-400">Happy customers</p>
          </div>
          
          <div>
            <h3 className="text-5xl font-bold mb-2">5k+</h3>
            <p className="text-gray-400">Hours spent on craft</p>
          </div>
          
          <div>
            <h3 className="text-5xl font-bold mb-2">4.8</h3>
            <p className="text-gray-400">Review rate</p>
          </div>
        </div>
      </div>
    </section>
  )
} 