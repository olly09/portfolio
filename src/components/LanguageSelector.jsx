import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'en', label: 'English', flag: 'EN' },
  { code: 'it', label: 'Italiano', flag: 'IT' },
  { code: 'es', label: 'Español', flag: 'ES' },
]

export default function LanguageSelector() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="retro-button flex items-center gap-2"
      >
        <span>{t('langLabel')}</span>
        <span className="opacity-60">{i18n.language.toUpperCase()}</span>
      </button>

      {open && (
        <div
          className="absolute bottom-full mb-2 right-0 rounded p-2 space-y-1 min-w-[140px]"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--accent)',
            boxShadow: '0 0 20px var(--accent-glow)',
            zIndex: 100,
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpen(false)
              }}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded text-xs tracking-wider transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                color: i18n.language === lang.code ? 'var(--accent)' : 'var(--text-secondary)',
                background: i18n.language === lang.code ? 'var(--cube-face-hover)' : 'transparent',
              }}
            >
              <span className="font-bold">{lang.flag}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
