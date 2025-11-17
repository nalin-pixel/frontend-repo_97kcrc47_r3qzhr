import React from 'react'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Features from './components/Features'
import Location from './components/Location'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-white text-slate-800">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-extrabold text-xl tracking-tight text-slate-900">The Coffee House</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold">
            <a href="#menu" className="hover:text-amber-700">Menu</a>
            <a href="#features" className="hover:text-amber-700">Features</a>
            <a href="#location" className="hover:text-amber-700">Location</a>
            <a href="/test" className="text-slate-500 hover:text-slate-800">System Test</a>
          </nav>
          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Coffee+House+Lupus+Street+Pimlico"
            target="_blank"
            rel="noreferrer"
            className="ml-4 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700"
          >
            Get Directions
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="features"><Features /></div>
        <Menu />
        <div id="location"><Location /></div>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} The Coffee House — Lupus Street, Pimlico, London</p>
          <p>Great for breakfast, quick lunches, coffee & cake, solo work sessions, and relaxed meetups.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
