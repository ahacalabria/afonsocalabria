import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navLinks = [
    { key: 'nav.about', id: 'hero' },
    { key: 'nav.skills', id: 'skills' },
    { key: 'nav.projects', id: 'projects' },
    { key: 'nav.education', id: 'education' },
    { key: 'nav.cats', id: 'cats' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-slate-900/80'} backdrop-blur-md border-b border-slate-800`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollTo('hero')}
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            AC
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {t(link.key)}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="ml-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-all border border-slate-700 hover:border-blue-500"
            >
              {i18n.language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
            </button>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700"
            >
              {i18n.language === 'pt' ? '🇺🇸' : '🇧🇷'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-800 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full text-left py-2.5 text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
            >
              {t(link.key)}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
