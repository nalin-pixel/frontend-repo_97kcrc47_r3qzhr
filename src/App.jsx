import React, { useState } from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Features from './components/Features'
import Location from './components/Location'

function App() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#menu', label: 'Menu' },
    { href: '#features', label: 'Features' },
    { href: '#location', label: 'Location' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white text-slate-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-slate-900 focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to content</a>

      <header className="sticky top-0 z-40 supports-[backdrop-filter]:bg-white/70 backdrop-blur bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-white font-extrabold">CH</span>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">The Coffee House</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-slate-700 hover:text-amber-700 transition-colors">{n.label}</a>
            ))}
            <a href="/test" className="text-slate-500 hover:text-slate-800">System Test</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition"
            >
              Get Directions
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-amber-700">{n.label}</a>
              ))}
              <a
                href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
                target="_blank"
                rel="noreferrer"
                className="py-2 text-slate-700 hover:text-amber-700"
                onClick={() => setOpen(false)}
              >
                Get Directions
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main">
        <Hero />
        <div id="features"><Features /></div>
        <Menu />
        <div id="location"><Location /></div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-slate-600 grid gap-4 sm:grid-cols-2 items-center">
          <p>© {new Date().getFullYear()} The Coffee House — Lupus Street, Pimlico, London</p>
          <div className="flex sm:justify-end gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <span>Open in Maps</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
