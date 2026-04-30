import React from 'react'
import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      key: 'okaru',
      emoji: '🛒',
      color: 'from-blue-600/20 to-blue-800/10',
      border: 'border-blue-500/20',
      glowHover: 'hover:border-blue-400/60 hover:shadow-blue-500/20',
      tagColors: ['bg-blue-500/20 text-blue-300', 'bg-cyan-500/20 text-cyan-300', 'bg-indigo-500/20 text-indigo-300'],
    },
    {
      key: 'auto',
      emoji: '🧠',
      color: 'from-violet-600/20 to-violet-800/10',
      border: 'border-violet-500/20',
      glowHover: 'hover:border-violet-400/60 hover:shadow-violet-500/20',
      tagColors: ['bg-violet-500/20 text-violet-300', 'bg-pink-500/20 text-pink-300', 'bg-amber-500/20 text-amber-300'],
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="border-b-4 border-blue-500 pb-1">{t('projects.title')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const tags = [
              t(`projects.${project.key}.tag1`),
              t(`projects.${project.key}.tag2`),
              t(`projects.${project.key}.tag3`),
            ]
            return (
              <div
                key={project.key}
                className={`relative rounded-2xl p-8 border ${project.border} bg-gradient-to-br ${project.color} bg-slate-800/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${project.glowHover} group`}
              >
                <div className="text-5xl mb-5">{project.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t(`projects.${project.key}.name`)}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {t(`projects.${project.key}.desc`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, i) => (
                    <span key={tag} className={`px-3 py-1 rounded-full text-xs font-semibold ${project.tagColors[i]}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-3">
                  {t('projects.viewMore')} <ExternalLink size={15} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
