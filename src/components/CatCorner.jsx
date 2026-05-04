import React from 'react'
import { useTranslation } from 'react-i18next'

const cats = [
  { key: 'chico', emoji: '🐱', color: 'from-orange-500/20 to-amber-600/10', border: 'border-orange-500/30', badge: 'text-orange-300 bg-orange-500/20' },
  { key: 'moca', emoji: '😸', color: 'from-pink-500/20 to-rose-600/10', border: 'border-pink-500/30', badge: 'text-pink-300 bg-pink-500/20' },
  { key: 'tiny', emoji: '🐈', color: 'from-yellow-500/20 to-amber-600/10', border: 'border-yellow-500/30', badge: 'text-yellow-300 bg-yellow-500/20' },
  { key: 'mime', emoji: '🐈‍⬛', color: 'from-slate-500/20 to-slate-600/10', border: 'border-slate-400/30', badge: 'text-slate-300 bg-slate-500/20' },
]

export default function CatCorner() {
  const { t } = useTranslation()

  return (
    <section id="cats" className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Paw pattern background */}
      <div className="absolute inset-0 text-slate-800/30 text-4xl leading-loose pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <span key={i} className="inline-block mx-4 my-2 rotate-12">🐾</span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 mb-4 tracking-widest uppercase">
            Easter Egg 🐣
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('cats.title')}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t('cats.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {cats.map((cat) => (
            <div
              key={cat.key}
              className={`rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.border} bg-slate-800/70 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="text-6xl mb-4">{cat.emoji}</div>
              <h3 className="text-xl font-bold text-white mb-1">{t(`cats.${cat.key}.name`)}</h3>
              <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-3 ${cat.badge}`}>
                CEO
              </span>
              <p className="text-slate-300 text-sm leading-relaxed">{t(`cats.${cat.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
