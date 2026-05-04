import React from 'react'
import { useTranslation } from 'react-i18next'
import { Server, Monitor, Smartphone, Cloud, Eye, BarChart3 } from 'lucide-react'

const skillGroups = [
  {
    key: 'backend',
    icon: Server,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    skills: ['PHP', 'Laravel', 'Python', 'Django', 'FastAPI', 'Node.js', 'WordPress', 'MySQL', 'PostgreSQL', 'REST APIs'],
  },
  {
    key: 'frontend',
    icon: Monitor,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    skills: ['ReactJS', 'Angular', 'VueJS', 'JavaScript', 'TypeScript', 'SASS', 'HTML/CSS', 'jQuery'],
  },
  {
    key: 'mobile',
    icon: Smartphone,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    skills: ['React Native', 'Flutter', 'Kotlin'],
  },
  {
    key: 'devops',
    icon: Cloud,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Git Flow'],
  },
  {
    key: 'cv',
    icon: Eye,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    skills: ['TensorFlow', 'NLP', 'OCR (Tesseract)', 'OpenCV', 'YOLO'],
  },
  {
    key: 'management',
    icon: BarChart3,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    skills: ['Technical Leadership', 'Agile / Scrum', 'Architecture', 'Team Mentoring', 'Software Engineering'],
  },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <span className="border-b-4 border-blue-500 pb-1">{t('skills.title')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.key}
                className={`rounded-2xl p-6 border ${group.border} ${group.bg} hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1`}
                style={{ backgroundColor: 'rgba(30,41,59,0.8)' }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${group.bg} border ${group.border}`}>
                  <Icon size={24} className={group.color} />
                </div>
                <h3 className={`font-bold text-lg mb-4 ${group.color}`}>
                  {t(`skills.${group.key}`)}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.color.replace('text-', 'bg-')}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
