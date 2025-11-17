import React from 'react'

const Menu = () => {
  return (
    <section id="menu" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Menu Highlights</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">From expertly brewed coffee to fresh breakfasts and indulgent desserts. Ask in-store for the full daily selection.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Coffee & Drinks</h3>
            <ul className="space-y-2 text-slate-700">
              <li>Freshly brewed coffee</li>
              <li>Espresso, cappuccino, latte, flat white</li>
              <li>Iced coffees and seasonal specials</li>
              <li>Large selection of teas</li>
              <li>Hot chocolate and soft drinks</li>
            </ul>
          </div>

          <div className="bg-rose-50 border border-rose-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-rose-900 mb-3">Food Options</h3>
            <ul className="space-y-2 text-slate-700">
              <li>Breakfast favourites (pastries, toasties, light dishes)</li>
              <li>Fresh lunch options</li>
              <li>Cakes, pastries, rotating desserts</li>
              <li>Quick bites for takeaway</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Espresso', desc: 'Rich and balanced' },
            { title: 'Flat White', desc: 'Smooth and velvety' },
            { title: 'Iced Latte', desc: 'Chilled and refreshing' },
            { title: 'Almond Croissant', desc: 'Flaky and indulgent' },
            { title: 'Mozzarella Toastie', desc: 'Hot & melty' },
            { title: 'Carrot Cake', desc: 'Classic favourite' },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">Popular</span>
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
