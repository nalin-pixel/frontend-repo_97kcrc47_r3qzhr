import React from 'react'

const Location = () => {
  const addressLines = [
    'The Coffee House',
    '138-140 Lupus St',
    'Pimlico, London SW1V',
  ]
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Location & Directions</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">Located on Lupus Street in Pimlico, a short walk from Pimlico Underground Station (Victoria Line). Easy to reach from Victoria, Westminster and Chelsea.</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Open in Google Maps
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-2 text-slate-700">
            <p className="font-semibold">The Coffee House</p>
            <address className="not-italic">
              {addressLines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </address>
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

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Good to know</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-slate-700">
              {[
                'Wheelchair-accessible entrance',
                'Indoor & outdoor seating',
                'Cards and contactless accepted',
                'Takeaway available',
                'Family-friendly',
                'Great for solo work',
              ].map((tip) => (
                <li key={tip} className="flex items-center gap-2"><span>•</span><span>{tip}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
