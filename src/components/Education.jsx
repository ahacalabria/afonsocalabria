import React from 'react'
import { useTranslation } from 'react-i18next'
import { GraduationCap, BookOpen, Users, Smartphone, FlaskConical, School } from 'lucide-react'

const items = [
  {
    key: 'uninassau',
    icon: BookOpen,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-600',
    badgeKey: 'education.badgeActive',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    tags: ['JavaScript', 'React Native', 'Flutter', 'PHP', 'HTML/CSS', 'Git Flow'],
  },
  {
    key: 'master',
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    dot: 'bg-violet-600',
    badgeKey: null,
    tags: ['ReactJS', 'Python', 'FastAPI', 'Django', 'TensorFlow', 'NLP'],
  },
  {
    key: 'bachelor',
    icon: School,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-600',
    badgeKey: null,
    tags: ['Algorithms', 'Software Engineering', 'Databases', 'Networks'],
  },
]

export default function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-24 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="border-b-4 border-blue-500 pb-1">{t('education.title')}</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-500/50 to-transparent hidden sm:block" />

          <div className="sm:pl-16 space-y-8">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.key} className="relative">
                  <div className={`absolute -left-10 top-6 w-8 h-8 ${item.dot} rounded-full flex items-center justify-center border-2 border-slate-900 hidden sm:flex`}>
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <div className="rounded-2xl p-8 bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl ${item.bg} border ${item.border} flex-shrink-0 sm:hidden`}>
                        <Icon size={24} className={item.color} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-white">{t(`education.${item.key}.role`)}</h3>
                          {item.badgeKey && (
                            <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${item.badgeColor}`}>
                              {t(item.badgeKey)}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm font-medium mb-2 ${item.color}`}>{t(`education.${item.key}.institution`)}</p>
                        <p className="text-slate-400 text-sm mb-3">{t(`education.${item.key}.period`)}</p>
                        <p className="text-slate-300 leading-relaxed">{t(`education.${item.key}.desc`)}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 bg-slate-700/60 text-slate-300 text-xs rounded-lg border border-slate-600/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
