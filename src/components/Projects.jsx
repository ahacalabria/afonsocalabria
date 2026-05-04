import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    key: 'okaru',
    emoji: '🛒',
    color: 'from-blue-600/20 to-blue-800/10',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    glowHover: 'hover:border-blue-400/60 hover:shadow-blue-500/20',
    tagColors: ['bg-blue-500/20 text-blue-300', 'bg-cyan-500/20 text-cyan-300', 'bg-indigo-500/20 text-indigo-300'],
    tagCount: 3,
  },
  {
    key: 'auto',
    emoji: '🧠',
    color: 'from-violet-600/20 to-violet-800/10',
    border: 'border-violet-500/20',
    accent: 'text-violet-400',
    glowHover: 'hover:border-violet-400/60 hover:shadow-violet-500/20',
    tagColors: ['bg-violet-500/20 text-violet-300', 'bg-pink-500/20 text-pink-300', 'bg-amber-500/20 text-amber-300'],
    tagCount: 3,
  },
  {
    key: 'americanas',
    emoji: '🏪',
    color: 'from-red-600/20 to-red-800/10',
    border: 'border-red-500/20',
    accent: 'text-red-400',
    glowHover: 'hover:border-red-400/60 hover:shadow-red-500/20',
    tagColors: [
      'bg-red-500/20 text-red-300',
      'bg-orange-500/20 text-orange-300',
      'bg-amber-500/20 text-amber-300',
      'bg-blue-500/20 text-blue-300',
      'bg-cyan-500/20 text-cyan-300',
      'bg-slate-500/20 text-slate-300',
    ],
    tagCount: 6,
  },
  {
    key: 'education',
    emoji: '🎓',
    color: 'from-emerald-600/20 to-emerald-800/10',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    glowHover: 'hover:border-emerald-400/60 hover:shadow-emerald-500/20',
    tagColors: [
      'bg-emerald-500/20 text-emerald-300',
      'bg-teal-500/20 text-teal-300',
      'bg-cyan-500/20 text-cyan-300',
      'bg-blue-500/20 text-blue-300',
    ],
    tagCount: 4,
  },
  {
    key: 'marathon',
    emoji: '🏃',
    color: 'from-amber-600/20 to-amber-800/10',
    border: 'border-amber-500/20',
    accent: 'text-amber-400',
    glowHover: 'hover:border-amber-400/60 hover:shadow-amber-500/20',
    tagColors: [
      'bg-amber-500/20 text-amber-300',
      'bg-orange-500/20 text-orange-300',
      'bg-red-500/20 text-red-300',
    ],
    tagCount: 3,
  },
]

const STAR_KEYS = ['s', 't', 'a', 'r']

export default function Projects() {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="projects" className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="border-b-4 border-blue-500 pb-1">{t('projects.title')}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-4">{t('projects.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const tags = Array.from({ length: project.tagCount }, (_, i) =>
              t(`projects.${project.key}.tag${i + 1}`)
            )
            const isOpen = expanded === project.key
            return (
              <div
                key={project.key}
                className={`relative rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} bg-slate-800/50 backdrop-blur transition-all duration-300 hover:shadow-xl ${project.glowHover} group flex flex-col`}
              >
                <div className="p-8 flex flex-col flex-1">
                  <div className="text-5xl mb-5">{project.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t(`projects.${project.key}.name`)}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                    {t(`projects.${project.key}.desc`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${project.tagColors[i % project.tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setExpanded(isOpen ? null : project.key)}
                    className={`flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${project.accent} hover:opacity-70 transition-opacity`}
                  >
                    {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    {isOpen ? t('projects.starCollapse') : t('projects.starExpand')}
                  </button>
                </div>

                {isOpen && (
                  <div className="px-8 pb-8 pt-5 border-t border-slate-700/40 space-y-4">
                    {STAR_KEYS.map((key) => (
                      <div key={key}>
                        <p className={`text-xs font-black uppercase tracking-widest ${project.accent} mb-1`}>
                          {t(`projects.star.${key}`)}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {t(`projects.${project.key}.star.${key}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
