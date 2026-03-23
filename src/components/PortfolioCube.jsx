import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../contexts/ThemeContext'

const FACES = [
  { key: 'about', idx: 0 },
  { key: 'work', idx: 1 },
  { key: 'skills', idx: 2 },
  { key: 'contact', idx: 3 },
  { key: 'education', idx: 4 },
  { key: 'experience', idx: 5 },
]

function snapTo90(deg) {
  return Math.round(deg / 90) * 90
}

export default function PortfolioCube({ onFaceClick, activeFace }) {
  const { t } = useTranslation()
  const { currentStyle } = useTheme()

  // baseRot = the snapped rotation from drag releases (multiples of 90)
  const [baseRot, setBaseRot] = useState({ x: 0, y: 0 })
  // mouseOffset = subtle tilt from mouse position (idle only)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  // dragDelta = accumulated rotation during an active drag
  const [dragDelta, setDragDelta] = useState({ x: 0, y: 0 })

  const [hoveredFace, setHoveredFace] = useState(null)
  const [mode, setMode] = useState('idle') // 'idle' | 'dragging' | 'snapping'

  const lastMouse = useRef({ x: 0, y: 0 })
  const dragMoved = useRef(false)

  // Mouse-follow when idle
  useEffect(() => {
    const onMove = (e) => {
      if (mode !== 'idle') return
      const nx = ((e.clientX / window.innerWidth) - 0.5) * 25
      const ny = ((e.clientY / window.innerHeight) - 0.5) * -18
      setMouseOffset({ x: ny, y: nx })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mode])

  // Drag handlers
  const onPointerDown = useCallback((e) => {
    setMode('dragging')
    setDragDelta({ x: 0, y: 0 })
    setMouseOffset({ x: 0, y: 0 })
    dragMoved.current = false
    lastMouse.current = { x: e.clientX, y: e.clientY }
  }, [])

  useEffect(() => {
    const onPointerMove = (e) => {
      if (mode !== 'dragging') return
      const dx = e.clientX - lastMouse.current.x
      const dy = e.clientY - lastMouse.current.y
      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) dragMoved.current = true
      setDragDelta(prev => ({
        x: prev.x - dy * 0.5,
        y: prev.y + dx * 0.5,
      }))
      lastMouse.current = { x: e.clientX, y: e.clientY }
    }

    const onPointerUp = () => {
      if (mode !== 'dragging') return
      // Snap: baseRot + dragDelta → nearest 90
      setBaseRot(prev => ({
        x: snapTo90(prev.x + dragDelta.x),
        y: snapTo90(prev.y + dragDelta.y),
      }))
      setDragDelta({ x: 0, y: 0 })
      setMode('snapping')
      // Return to idle after snap animation
      setTimeout(() => setMode('idle'), 450)
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [mode, dragDelta])

  const handleFaceClick = useCallback((key) => {
    if (dragMoved.current) return
    onFaceClick(key)
  }, [onFaceClick])

  // Final rotation computation
  let finalX, finalY, transition
  if (mode === 'dragging') {
    finalX = baseRot.x + dragDelta.x
    finalY = baseRot.y + dragDelta.y
    transition = 'none'
  } else if (mode === 'snapping') {
    finalX = baseRot.x
    finalY = baseRot.y
    transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  } else {
    // idle: base + mouse offset
    finalX = baseRot.x + mouseOffset.x
    finalY = baseRot.y + mouseOffset.y
    transition = 'transform 0.15s ease-out'
  }

  const cubeSize = 180
  const half = cubeSize / 2

  const faceTransforms = [
    `translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ]

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-30"
      style={{ pointerEvents: 'none' }}
    >
      <div
        style={{
          perspective: 800,
          pointerEvents: 'auto',
          cursor: mode === 'dragging' ? 'grabbing' : 'grab',
        }}
        onPointerDown={onPointerDown}
      >
        <div
          style={{
            width: cubeSize,
            height: cubeSize,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${finalX}deg) rotateY(${finalY}deg)`,
            transition,
          }}
        >
          {FACES.map((face, i) => {
            const isHovered = hoveredFace === face.key
            const isActive = activeFace === face.key
            return (
              <div
                key={face.key}
                onClick={() => handleFaceClick(face.key)}
                onMouseEnter={() => setHoveredFace(face.key)}
                onMouseLeave={() => setHoveredFace(null)}
                style={{
                  position: 'absolute',
                  width: cubeSize,
                  height: cubeSize,
                  transform: faceTransforms[i],
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: currentStyle.cubeStyle === 'gradient' ? '2px solid var(--accent)'
                    : '1px solid var(--accent)',
                  background: isActive
                    ? 'var(--cube-face-active)'
                    : isHovered
                      ? 'var(--cube-face-hover)'
                      : currentStyle.cubeStyle === 'solid'
                        ? 'var(--bg-secondary)'
                        : 'var(--cube-face)',
                  backdropFilter: currentStyle.cubeStyle === 'translucent' ? 'blur(6px)' : 'none',
                  WebkitBackdropFilter: currentStyle.cubeStyle === 'translucent' ? 'blur(6px)' : 'none',
                  borderRadius: currentStyle.cubeStyle === 'gradient' ? '8px' : '0',
                  cursor: 'pointer',
                  transition: 'background 0.3s, box-shadow 0.3s',
                  boxShadow: isHovered
                    ? currentStyle.glowIntensity === 'none'
                      ? '0 4px 20px rgba(0,0,0,0.15)'
                      : '0 0 20px var(--accent-glow), inset 0 0 15px var(--accent-glow)'
                    : currentStyle.glowIntensity === 'none'
                      ? '0 2px 10px rgba(0,0,0,0.08)'
                      : 'inset 0 0 8px rgba(0,0,0,0.2)',
                  userSelect: 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'var(--accent)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textShadow: '0 0 10px var(--accent-glow)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {t(`faces.${face.key}`)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
