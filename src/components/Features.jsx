import React from 'react'

const features = [
  { icon: '♿', label: 'Wheelchair-accessible entrance' },
  { icon: '🪑', label: 'Indoor seating' },
  { icon: '🌤️', label: 'Outdoor seating' },
  { icon: '🥡', label: 'Takeaway service' },
  { icon: '🚻', label: 'Customer toilet' },
  { icon: '💳', label: 'Cards & contactless' },
  { icon: '📶', label: 'Great for working solo' },
  { icon: '👨‍👩‍👧', label: 'Family-friendly' },
]

const Features = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Features & Amenities</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Comfortable, friendly and designed for relaxed moments, quick bites, and focused work.</p>
          </div>
          <a href="#menu" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50">See menu</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <span className="text-xl" aria-hidden>{f.icon}</span>
              <span className="text-slate-800">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
