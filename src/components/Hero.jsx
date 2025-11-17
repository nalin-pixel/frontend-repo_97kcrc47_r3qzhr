import React from 'react'

const Hero = () => {
  const defaultImage = "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop"
  // You can set VITE_HERO_IMAGE to a full image URL or to a file placed in /public (e.g., "/coffee-hero.jpg")
  const heroImageUrl = import.meta.env.VITE_HERO_IMAGE || "/coffee-hero.jpg" || defaultImage

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-rose-300/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block text-xs tracking-widest uppercase text-amber-700 bg-amber-100 rounded-full px-3 py-1 mb-4">Pimlico • London</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              The Coffee House
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
              A cosy, casual and trendy neighbourhood café on Lupus Street. Warm atmosphere, great coffee, and a welcoming spot for breakfasts, quick lunches, desserts and relaxed moments.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {['Cosy','Casual','Trendy','Local'].map((chip) => (
                <span key={chip} className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs">{chip}</span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="px-5 py-3 rounded-lg bg-amber-600 text-white font-semibold hover:bg-amber-700 transition">View Menu</a>
              <a href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition">Directions</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-700">
              {[
                ['☕','Great coffee'],
                ['🪑','Indoor seating'],
                ['🌤️','Outdoor seating'],
                ['♿','Accessible'],
                ['🧁','Desserts'],
                ['🕒','Quick bites'],
                ['📶','Work-friendly'],
                ['💳','Cards & NFC'],
              ].map(([icon,label]) => (
                <div key={label} className="flex items-center gap-2 bg-white/80 border border-slate-200 rounded-lg px-3 py-2"><span aria-hidden>{icon}</span><span>{label}</span></div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2" aria-label="Photo of The Coffee House in Pimlico with a coffee cup">
            <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img src={heroImageUrl} alt="The Coffee House exterior" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              <div className="absolute bottom-3 right-3">
                <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow">Open daily</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-slate-600">Address: Lupus Street, Pimlico, London • Nearest Tube: Pimlico (Victoria Line)</p>
      </div>
    </section>
  )
}

export default Hero
