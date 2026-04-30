import React from 'react'
import { useTranslation } from 'react-i18next'
import { Github, Heart } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <span className="font-bold text-blue-400">AC</span>
          <span>©{year}</span>
          <span>{t('footer.rights')}</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
          <span>{t('footer.madeWith')}</span>
          <Heart size={14} className="text-red-400 fill-red-400" />
          <span>by Afonso Calabria</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ahacalabria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all border border-slate-700 hover:border-blue-500"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
