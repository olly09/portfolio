import React, { useState, useEffect, useRef, useMemo } from 'react'

const CONSTRUCTION_ITEMS = [
  { type: 'cone', emoji: '🔶' },
  { type: 'sign', emoji: '🚧' },
  { type: 'cone', emoji: '🔶' },
  { type: 'barrier', emoji: '⚠️' },
  { type: 'sign', emoji: '🚧' },
  { type: 'cone', emoji: '🔶' },
  { type: 'barrier', emoji: '⚠️' },
  { type: 'sign', emoji: '🚧' },
  { type: 'cone', emoji: '🔶' },
  { type: 'barrier', emoji: '⚠️' },
]

function FloatingItem({ item }) {
  const elRef = useRef(null)
  const pos = useRef({ x: item.x, y: item.y })
  const vel = useRef({ x: item.vx, y: item.vy })

  useEffect(() => {
    let raf
    const tick = () => {
      pos.current.x += vel.current.x
      pos.current.y += vel.current.y
      const maxX = window.innerWidth - 30
      const maxY = window.innerHeight - 30
      if (pos.current.x <= 0 || pos.current.x >= maxX) vel.current.x *= -1
      if (pos.current.y <= 0 || pos.current.y >= maxY) vel.current.y *= -1
      pos.current.x = Math.max(0, Math.min(maxX, pos.current.x))
      pos.current.y = Math.max(0, Math.min(maxY, pos.current.y))
      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ willChange: 'transform', zIndex: 1, opacity: item.opacity, fontSize: item.size }}
    >
      {item.emoji}
    </div>
  )
}

function ProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 75) return 75
        return prev + 0.3
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ width: 260, margin: '0 auto' }}>
      <div
        style={{
          width: '100%',
          height: 6,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 3,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #555, #aaa, #555)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s linear infinite',
            borderRadius: 3,
            transition: 'width 0.1s ease-out',
          }}
        />
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  )
}

export default function WipPage() {
  const [rotation, setRotation] = useState({ x: -20, y: 30 })

  useEffect(() => {
    let raf
    let t = 0
    const tick = () => {
      t += 0.008
      setRotation({
        x: Math.sin(t * 0.7) * 15 - 10,
        y: t * 20,
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const floatingItems = useMemo(() =>
    CONSTRUCTION_ITEMS.map((item, i) => ({
      ...item,
      id: i,
      x: Math.random() * (window.innerWidth - 40),
      y: Math.random() * (window.innerHeight - 40),
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      opacity: 0.04 + Math.random() * 0.08,
      size: `${14 + Math.random() * 16}px`,
    })),
  [])

  const cubeSize = 160

  const faces = [
    { transform: `translateZ(${cubeSize / 2}px)` },
    { transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)` },
    { transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)` },
    { transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)` },
    { transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)` },
    { transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)` },
  ]

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #151515 35%, #000000 70%)',
      }}
    >
      {/* Floating construction elements */}
      {floatingItems.map(item => (
        <FloatingItem key={item.id} item={item} />
      ))}

      {/* Rotating cube */}
      <div style={{ perspective: 700, marginBottom: 40 }}>
        <div
          style={{
            width: cubeSize,
            height: cubeSize,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: cubeSize,
                height: cubeSize,
                transform: face.transform,
                backfaceVisibility: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(2px)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.5rem',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  userSelect: 'none',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  lineHeight: '1.6',
                }}
              >
                WORK IN<br />PROGRESS
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle */}
      <p
        className="z-10"
        style={{
          color: 'rgba(255,255,255,0.2)',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
        }}
      >
        SOMETHING IS BEING BUILT...
      </p>
    </div>
  )
}
