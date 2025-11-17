import React from 'react'

const SectionCard = ({ title, tone = 'amber', items }) => {
  const tones = {
    amber: {
      wrap: 'bg-amber-50 border-amber-100',
      heading: 'text-amber-900'
    },
    rose: {
      wrap: 'bg-rose-50 border-rose-100',
      heading: 'text-rose-900'
    },
  }
  const t = tones[tone] || tones.amber
  return (
    <div className={`rounded-2xl p-6 border ${t.wrap}`}>
      <h3 className={`text-xl font-bold ${t.heading} mb-3`}>{title}</h3>
      <ul className="space-y-2 text-slate-700 list-disc list-inside">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
}

const Menu = () => {
  const highlights = [
    { title: 'Espresso', desc: 'Rich and balanced', tag: 'Popular' },
    { title: 'Flat White', desc: 'Smooth and velvety', tag: 'Signature' },
    { title: 'Iced Latte', desc: 'Chilled and refreshing', tag: 'Seasonal' },
    { title: 'Almond Croissant', desc: 'Flaky and indulgent', tag: 'Bakery' },
    { title: 'Mozzarella Toastie', desc: 'Hot & melty', tag: 'Lunch' },
    { title: 'Carrot Cake', desc: 'Classic favourite', tag: 'Bakery' },
  ]

  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Menu Highlights</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">From expertly brewed coffee to fresh breakfasts and indulgent desserts. Ask in-store for the full daily selection.</p>
          </div>
          <a
            href="#location"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Opening hours & location
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <SectionCard
            title="Coffee & Drinks"
            tone="amber"
            items={[
              'Freshly brewed coffee',
              'Espresso, cappuccino, latte, flat white',
              'Iced coffees and seasonal specials',
              'Large selection of teas',
              'Hot chocolate and soft drinks',
            ]}
          />
          <SectionCard
            title="Food Options"
            tone="rose"
            items={[
              'Breakfast favourites (pastries, toasties, light dishes)',
              'Fresh lunch options',
              'Cakes, pastries, rotating desserts',
              'Quick bites for takeaway',
            ]}
          />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{item.tag}</span>
              </div>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
