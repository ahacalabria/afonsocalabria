import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import CatCorner from './components/CatCorner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <CatCorner />
      </main>
      <Footer />
    </div>
  )
}

export default App
