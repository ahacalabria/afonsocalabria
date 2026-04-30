import React from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Github } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #0f172a 60%, #1e1b4b 100%)',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-slate-400 text-lg mb-3 font-medium tracking-wide">
          {t('hero.greeting')}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight">
          {t('hero.name')}
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
          {t('hero.title')}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            {t('hero.cta')}
          </button>
          <a
            href="mailto:afonso@example.com"
            className="px-8 py-3.5 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            {t('hero.ctaContact')}
          </a>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <a
            href="https://github.com/ahacalabria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 hover:border-blue-500"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollTo('skills')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
