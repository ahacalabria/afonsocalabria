import React from 'react'
import { useTranslation } from 'react-i18next'
import { GraduationCap, BookOpen, Users, Smartphone } from 'lucide-react'

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
            {/* Educator card */}
            <div className="relative">
              <div className="absolute -left-10 top-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center border-2 border-slate-900 hidden sm:flex">
                <GraduationCap size={16} className="text-white" />
              </div>
              <div className="rounded-2xl p-8 bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0 sm:hidden">
                    <GraduationCap size={24} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{t('education.educator.role')}</h3>
                      <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-500/30">
                        Ativo
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{t('education.educator.desc')}</p>
                    <div className="flex flex-wrap gap-3 mt-5">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <BookOpen size={15} className="text-blue-400" />
                        Web Development
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Smartphone size={15} className="text-blue-400" />
                        Mobile Development
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Users size={15} className="text-blue-400" />
                        Team Mentoring
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
