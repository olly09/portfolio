import React, { useState, useEffect, useCallback, useRef } from 'react'

export default function LoadingCube({ onComplete }) {
  const [ready, setReady] = useState(false)
  const [entering, setEntering] = useState(false)
  const [rotation, setRotation] = useState({ x: -25, y: 35 })
  const cubeRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      if (entering) return
      const nx = ((e.clientX / window.innerWidth) - 0.5) * 60
      const ny = ((e.clientY / window.innerHeight) - 0.5) * -40
      setRotation({ x: ny - 15, y: nx + 10 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [entering])

  const handleEnter = useCallback(() => {
    if (!ready || entering) return
    setEntering(true)
    setTimeout(() => onComplete(), 1200)
  }, [ready, entering, onComplete])

  const cubeSize = 200

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'var(--bg-primary)' }}>
      {/* Glow behind cube */}
      <div
        className="absolute"
        style={{
          width: cubeSize * 2,
          height: cubeSize * 2,
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: 0.5,
          transition: 'opacity 1s',
          ...(entering && { opacity: 0 }),
        }}
      />

      {/* CSS 3D Cube */}
      <div
        style={{
          perspective: 900,
          perspectiveOrigin: '50% 50%',
        }}
      >
        <div
          ref={cubeRef}
          style={{
            width: cubeSize,
            height: cubeSize,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: entering
              ? `rotateX(0deg) rotateY(0deg) scale(8)`
              : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: entering
              ? 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease'
              : 'transform 0.15s ease-out',
            opacity: entering ? 0 : 1,
          }}
        >
          {[
            { name: 'front', transform: `translateZ(${cubeSize / 2}px)` },
            { name: 'back', transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)` },
            { name: 'right', transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)` },
            { name: 'left', transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)` },
            { name: 'top', transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)` },
            { name: 'bottom', transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)` },
          ].map((face) => (
            <div
              key={face.name}
              style={{
                position: 'absolute',
                width: cubeSize,
                height: cubeSize,
                transform: face.transform,
                backfaceVisibility: 'visible',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--accent)',
                boxShadow: 'inset 0 0 30px rgba(0,0,0,0.4)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--accent)',
                  fontSize: '1.6rem',
                  letterSpacing: '0.25em',
                  textShadow: '0 0 15px var(--accent-glow), 0 0 30px var(--accent-glow)',
                  fontWeight: 700,
                }}
              >
                OLIVER
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom UI */}
      <div className="absolute bottom-16 flex flex-col items-center gap-4 z-10">
        {ready && !entering ? (
          <button onClick={handleEnter} className="retro-button animate-pulse" style={{ animationDuration: '2s' }}>
            ENTER
          </button>
        ) : !entering ? (
          <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
              INITIALIZING...
            </span>
          </div>
        ) : null}
      </div>

      <div className="scanline-overlay" />
    </div>
  )
}
