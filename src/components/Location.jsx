import React from 'react'

const Location = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Location & Directions</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">Located on Lupus Street in Pimlico, a short walk from Pimlico Underground Station (Victoria Line). Easy to reach from Victoria, Westminster and Chelsea.</p>

        <div className="mt-8 space-y-4 text-slate-700">
          <p className="font-semibold">The Coffee House</p>
          <p>138-140 Lupus St, Pimlico, London SW1V</p>
          <p><span className="font-semibold">Nearest Tube:</span> Pimlico Station – Victoria Line</p>
          <p>
            <span className="font-semibold">Walking Directions:</span> Exit Pimlico Station, walk west along Lupus Street for a few minutes. The café is along the main parade of local shops.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Open in Google Maps
            </a>
            <a href="#menu" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition">See Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
