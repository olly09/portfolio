import React from 'react'
import { useTranslation } from 'react-i18next'

function AboutPanel() {
  const { t } = useTranslation()
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('aboutContent.title')}
      </h2>
      <div
        className="p-4 rounded border border-dashed leading-relaxed text-sm"
        style={{
          borderColor: 'var(--accent)',
          color: 'var(--text-secondary)',
          background: 'var(--cube-face)',
        }}
      >
        {t('aboutContent.text')}
      </div>
      <div className="mt-4 flex gap-4">
        <div
          className="w-24 h-24 rounded border border-dashed flex items-center justify-center text-xs"
          style={{ borderColor: 'var(--accent)', color: 'var(--text-secondary)' }}
        >
          [PHOTO]
        </div>
        <div className="flex-1 space-y-2">
          <div
            className="h-3 rounded w-3/4"
            style={{ background: 'var(--cube-face-hover)' }}
          />
          <div
            className="h-3 rounded w-1/2"
            style={{ background: 'var(--cube-face-hover)' }}
          />
          <div
            className="h-3 rounded w-2/3"
            style={{ background: 'var(--cube-face-hover)' }}
          />
        </div>
      </div>
    </div>
  )
}

function WorkPanel() {
  const { t } = useTranslation()
  const items = t('workContent.items', { returnObjects: true })
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('workContent.title')}
      </h2>
      <div className="space-y-3">
        {Array.isArray(items) && items.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded border border-dashed"
            style={{
              borderColor: 'var(--accent)',
              background: 'var(--cube-face)',
            }}
          >
            <div
              className="text-xs font-bold tracking-wider mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              {item.name}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.desc}
            </div>
            <div
              className="mt-2 w-full h-16 rounded border border-dashed flex items-center justify-center text-xs"
              style={{ borderColor: 'var(--accent)', color: 'var(--text-secondary)', background: 'var(--cube-face)' }}
            >
              [PROJECT SCREENSHOT]
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillsPanel() {
  const { t } = useTranslation()
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('skillsContent.title')}
      </h2>
      <div
        className="p-4 rounded border border-dashed text-sm leading-relaxed"
        style={{
          borderColor: 'var(--accent)',
          color: 'var(--text-secondary)',
          background: 'var(--cube-face)',
        }}
      >
        {t('skillsContent.text')}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['[SKILL 1]', '[SKILL 2]', '[SKILL 3]', '[SKILL 4]', '[SKILL 5]', '[SKILL 6]'].map((s, i) => (
          <div
            key={i}
            className="p-2 text-center text-xs rounded border border-dashed"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--text-secondary)',
              background: 'var(--cube-face)',
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactPanel() {
  const { t } = useTranslation()
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('contactContent.title')}
      </h2>
      <div className="space-y-3">
        <div
          className="p-3 rounded border border-dashed text-sm"
          style={{ borderColor: 'var(--accent)', background: 'var(--cube-face)' }}
        >
          <span className="text-xs tracking-wider block mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
            EMAIL
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>{t('contactContent.email')}</span>
        </div>
        <div
          className="p-3 rounded border border-dashed text-sm"
          style={{ borderColor: 'var(--accent)', background: 'var(--cube-face)' }}
        >
          <span className="text-xs tracking-wider block mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
            GITHUB
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>{t('contactContent.github')}</span>
        </div>
        <div
          className="p-3 rounded border border-dashed text-sm"
          style={{ borderColor: 'var(--accent)', background: 'var(--cube-face)' }}
        >
          <span className="text-xs tracking-wider block mb-1" style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}>
            LINKEDIN
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>{t('contactContent.linkedin')}</span>
        </div>
        <div
          className="p-4 rounded border border-dashed text-xs leading-relaxed"
          style={{ borderColor: 'var(--accent)', color: 'var(--text-secondary)', background: 'var(--cube-face)' }}
        >
          {t('contactContent.text')}
        </div>
      </div>
    </div>
  )
}

function EducationPanel() {
  const { t } = useTranslation()
  const items = t('educationContent.items', { returnObjects: true })
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('educationContent.title')}
      </h2>
      <div className="space-y-3">
        {Array.isArray(items) && items.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded border border-dashed"
            style={{ borderColor: 'var(--accent)', background: 'var(--cube-face)' }}
          >
            <div
              className="text-xs font-bold tracking-wider mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              {item.name}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExperiencePanel() {
  const { t } = useTranslation()
  const items = t('experienceContent.items', { returnObjects: true })
  return (
    <div>
      <h2
        className="text-xl mb-4 tracking-widest"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
      >
        {t('experienceContent.title')}
      </h2>
      <div className="space-y-3">
        {Array.isArray(items) && items.map((item, i) => (
          <div
            key={i}
            className="p-3 rounded border border-dashed"
            style={{ borderColor: 'var(--accent)', background: 'var(--cube-face)' }}
          >
            <div
              className="text-xs font-bold tracking-wider mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--accent)' }}
            >
              {item.name}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const PANELS = {
  about: AboutPanel,
  work: WorkPanel,
  skills: SkillsPanel,
  contact: ContactPanel,
  education: EducationPanel,
  experience: ExperiencePanel,
}

export default function FaceContent({ faceKey, onClose }) {
  const { t } = useTranslation()
  const Panel = PANELS[faceKey]
  if (!Panel) return null

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      onClick={onClose}
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="face-content-panel relative w-full max-w-lg max-h-[80vh] overflow-y-auto p-6 mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'fadeInScale 0.3s ease-out',
        }}
      >
        <button
          onClick={onClose}
          className="retro-button absolute top-3 right-3 text-xs"
        >
          {t('backToCube')}
        </button>

        <div className="mt-6">
          <Panel />
        </div>

        <style>{`
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </div>
  )
}
