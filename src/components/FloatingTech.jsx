import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeContext'

const TECH_LIST = [
  { id: 'react', label: 'React' },
  { id: 'javascript', label: 'JS' },
  { id: 'typescript', label: 'TS' },
  { id: 'nodejs', label: 'Node' },
  { id: 'python', label: 'Python' },
  { id: 'css', label: 'CSS' },
  { id: 'git', label: 'Git' },
  { id: 'docker', label: 'Docker' },
  { id: 'sql', label: 'SQL' },
  { id: 'threejs', label: 'Three' },
]

const BUBBLE_SIZE = 54
const MARGIN_TOP = 40
const MARGIN_BOTTOM = 60

const MIXED_SHAPES = [
  '50%',
  '12px',
  '50% 20% 50% 20%',
  '30% 70% 30% 70%',
  '50%',
  '8px',
  '40% 60% 40% 60%',
  '50%',
  '16px',
  '60% 30% 60% 30%',
]

function TechBubble({ tech, initialPos, onSelect, isSelected, bubbleShape, index }) {
  const { t } = useTranslation()
  const elRef = useRef(null)
  const pos = useRef({ ...initialPos })
  const vel = useRef({
    x: (Math.random() - 0.5) * 0.6 + (Math.random() > 0.5 ? 0.2 : -0.2),
    y: (Math.random() - 0.5) * 0.6 + (Math.random() > 0.5 ? 0.2 : -0.2),
  })
  const dragging = useRef(false)
  const dragOff = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const tick = () => {
      if (!dragging.current) {
        pos.current.x += vel.current.x
        pos.current.y += vel.current.y

        const maxX = window.innerWidth - BUBBLE_SIZE
        const minY = MARGIN_TOP
        const maxY = window.innerHeight - BUBBLE_SIZE - MARGIN_BOTTOM

        if (pos.current.x <= 0) { pos.current.x = 0; vel.current.x = Math.abs(vel.current.x) }
        if (pos.current.x >= maxX) { pos.current.x = maxX; vel.current.x = -Math.abs(vel.current.x) }
        if (pos.current.y <= minY) { pos.current.y = minY; vel.current.y = Math.abs(vel.current.y) }
        if (pos.current.y >= maxY) { pos.current.y = maxY; vel.current.y = -Math.abs(vel.current.y) }
      }

      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)` + (isSelected ? ' scale(1.15)' : '')
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [isSelected])

  const onDown = useCallback((e) => {
    e.preventDefault()
    dragging.current = true
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    dragOff.current = { x: clientX - pos.current.x, y: clientY - pos.current.y }

    const onMoveHandler = (ev) => {
      const cx = ev.touches ? ev.touches[0].clientX : ev.clientX
      const cy = ev.touches ? ev.touches[0].clientY : ev.clientY
      pos.current.x = cx - dragOff.current.x
      pos.current.y = cy - dragOff.current.y
    }

    const onUpHandler = () => {
      dragging.current = false
      vel.current = {
        x: (Math.random() - 0.5) * 0.8,
        y: (Math.random() - 0.5) * 0.8,
      }
      window.removeEventListener('mousemove', onMoveHandler)
      window.removeEventListener('mouseup', onUpHandler)
      window.removeEventListener('touchmove', onMoveHandler)
      window.removeEventListener('touchend', onUpHandler)
    }

    window.addEventListener('mousemove', onMoveHandler)
    window.addEventListener('mouseup', onUpHandler)
    window.addEventListener('touchmove', onMoveHandler, { passive: false })
    window.addEventListener('touchend', onUpHandler)
  }, [])

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 z-10"
      style={{
        width: BUBBLE_SIZE,
        height: BUBBLE_SIZE,
        willChange: 'transform',
        cursor: dragging.current ? 'grabbing' : 'grab',
      }}
      onMouseDown={onDown}
      onTouchStart={onDown}
      onClick={(e) => { e.stopPropagation(); onSelect(tech.id) }}
    >
      <div
        className="w-full h-full flex items-center justify-center border select-none"
        style={{
          borderColor: 'var(--accent)',
          background: isSelected ? 'var(--cube-face-active)' : 'var(--cube-face)',
          color: 'var(--accent)',
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.05em',
          fontWeight: 600,
          borderRadius: bubbleShape === 'circle' ? '50%'
            : bubbleShape === 'rounded' ? '12px'
            : bubbleShape === 'mixed' ? MIXED_SHAPES[index % MIXED_SHAPES.length]
            : '50%',
          boxShadow: isSelected
            ? '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow)'
            : bubbleShape === 'mixed' ? '0 0 14px var(--accent-glow), 0 4px 12px rgba(0,0,0,0.15)'
            : bubbleShape === 'rounded' ? '0 2px 8px rgba(0,0,0,0.1)'
            : '0 0 8px var(--accent-glow)',
          transition: 'box-shadow 0.3s, background 0.3s, border-radius 0.5s',
          borderWidth: bubbleShape === 'mixed' ? 2 : bubbleShape === 'rounded' ? 1 : 1,
        }}
      >
        {tech.label}
      </div>

      {isSelected && (
        <div
          className="absolute left-1/2 mt-2 p-3 rounded text-xs w-48 -translate-x-1/2"
          style={{
            top: BUBBLE_SIZE,
            background: 'var(--bg-secondary)',
            border: '1px solid var(--accent)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 0 15px var(--accent-glow)',
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          <div
            className="font-bold mb-1 text-xs tracking-wider"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}
          >
            {tech.label}
          </div>
          <div className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {t(`techBubbles.${tech.id}`)}
          </div>
        </div>
      )}
    </div>
  )
}

export default function FloatingTech() {
  const [selectedTech, setSelectedTech] = useState(null)
  const { currentStyle } = useTheme()

  const initialPositions = useRef(
    TECH_LIST.map((_, i) => ({
      x: 40 + (i % 5) * (Math.min(window.innerWidth, 1200) / 5.5) + Math.random() * 40,
      y: MARGIN_TOP + 30 + Math.floor(i / 5) * (window.innerHeight / 3) + Math.random() * 60,
    }))
  )

  useEffect(() => {
    const onClickOutside = () => setSelectedTech(null)
    window.addEventListener('pointerdown', onClickOutside)
    return () => window.removeEventListener('pointerdown', onClickOutside)
  }, [])

  const handleSelect = useCallback((id) => {
    setSelectedTech((prev) => (prev === id ? null : id))
  }, [])

  return (
    <>
      {TECH_LIST.map((tech, i) => (
        <TechBubble
          key={tech.id}
          tech={tech}
          initialPos={initialPositions.current[i]}
          onSelect={handleSelect}
          isSelected={selectedTech === tech.id}
          bubbleShape={currentStyle.bubbleShape}
          index={i}
        />
      ))}
    </>
  )
}
