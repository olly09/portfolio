import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from './contexts/ThemeContext'
import WipPage from './components/WipPage'
import LoadingCube from './components/LoadingCube'
import PortfolioCube from './components/PortfolioCube'
import FloatingTech from './components/FloatingTech'
import FloatingDecor from './components/FloatingDecor'
import FaceContent from './components/FaceContent'
import ThemeSelector from './components/ThemeSelector'
import LanguageSelector from './components/LanguageSelector'

// ✦ Set to false when ready to launch the full portfolio
const WIP_MODE = true

export default function App() {
  const [phase, setPhase] = useState('loading')
  const [activeFace, setActiveFace] = useState(null)
  const { t } = useTranslation()
  const { currentStyle } = useTheme()

  const handleLoadingComplete = useCallback(() => {
    setPhase('portfolio')
  }, [])

  const handleFaceClick = useCallback((faceKey) => {
    setActiveFace(faceKey)
  }, [])

  const handleCloseContent = useCallback(() => {
    setActiveFace(null)
  }, [])

  if (WIP_MODE) return <WipPage />

  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      {phase === 'loading' && (
        <>
          <FloatingDecor />
          <LoadingCube onComplete={handleLoadingComplete} />
        </>
      )}

      {phase === 'portfolio' && (
        <div
          className="w-full h-full style-bg relative"
          style={{ animation: 'fadeIn 0.8s ease-out' }}
        >
          <FloatingDecor />
          <PortfolioCube onFaceClick={handleFaceClick} activeFace={activeFace} />
          <FloatingTech />

          {!activeFace && (
            <div
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-30 text-xs tracking-[0.3em] uppercase animate-pulse"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              {t('clickToExplore')}
            </div>
          )}

          {activeFace && (
            <FaceContent faceKey={activeFace} onClose={handleCloseContent} />
          )}

          <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-between items-end">
            <ThemeSelector />
            <LanguageSelector />
          </div>

          <div className="fixed top-4 left-4 z-30">
            <div
              className="text-xs tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              OLIVER
            </div>
            <div
              className="text-[0.6rem] tracking-wider mt-0.5"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
            >
              FRONT-END DEVELOPER & GRAPHIC DESIGNER
            </div>
          </div>

          <div
            className="fixed top-4 right-4 z-30 text-[0.6rem] tracking-wider text-right"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}
          >
            <div>SYS.STATUS: <span style={{ color: 'var(--accent)' }}>ONLINE</span></div>
            <div className="opacity-50">v1.0.0</div>
          </div>

          <div className="scanline-overlay" />
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
