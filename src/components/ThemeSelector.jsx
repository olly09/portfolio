import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function ThemeSelector() {
  const { palette, setPalette, palettes, style, setStyle, visualStyles } = useTheme()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const currentAccent = palettes.find(p => p.id === palette)?.accent || '#00f0ff'

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="retro-button flex items-center gap-2"
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{ background: currentAccent, boxShadow: `0 0 6px ${currentAccent}` }}
        />
        <span>{t('themeLabel')}</span>
      </button>

      {open && (
        <div
          className="absolute bottom-full mb-2 left-0 rounded p-3 min-w-[200px]"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--accent)',
            boxShadow: '0 0 20px var(--accent-glow)',
            zIndex: 100,
            borderRadius: 'var(--border-radius)',
          }}
        >
          {/* Color palette */}
          <div className="mb-3">
            <div className="text-[0.6rem] tracking-widest mb-1.5 uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)' }}>
              Color
            </div>
            <div className="flex gap-1.5">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPalette(p.id)}
                  title={p.name}
                  style={{
                    width: 24, height: 24,
                    borderRadius: '50%',
                    background: p.accent,
                    border: palette === p.id ? '2px solid var(--text-primary)' : '2px solid transparent',
                    boxShadow: palette === p.id ? `0 0 8px ${p.accent}` : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Visual style */}
          <div>
            <div className="text-[0.6rem] tracking-widest mb-1.5 uppercase" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-display)' }}>
              Style
            </div>
            <div className="space-y-1">
              {visualStyles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStyle(s.id)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs tracking-wider transition-colors text-left"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: style === s.id ? 'var(--accent)' : 'var(--text-secondary)',
                    background: style === s.id ? 'var(--cube-face-hover)' : 'transparent',
                    cursor: 'pointer',
                    borderRadius: 'var(--border-radius)',
                  }}
                >
                  <span className="font-bold">{s.name}</span>
                  <span className="opacity-50 text-[0.55rem]">{s.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
