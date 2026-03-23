import React, { useRef, useEffect, useMemo } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const SCIFI_ELEMENTS = [
  '<div>', '</>', '{...}', '0x3F', '01001', 'NULL', '/**/', '=> {}',
  '#!/', 'async', '</>',  '[ ]', '::',  '#include', '&&', '|>',
]

const PLAYFUL_SHAPES = ['circle', 'square', 'star', 'bar', 'triangle', 'diamond', 'cross', 'ring']

function PlayfulShape({ shape, size, color, opacity }) {
  const s = size
  switch (shape) {
    case 'circle':
      return <div style={{ width: s, height: s, borderRadius: '50%', background: color, opacity }} />
    case 'square':
      return <div style={{ width: s, height: s, borderRadius: s * 0.15, background: color, opacity }} />
    case 'star':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill={color} style={{ opacity }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      )
    case 'bar':
      return <div style={{ width: s * 2.5, height: s * 0.35, borderRadius: s * 0.2, background: color, opacity }} />
    case 'triangle':
      return (
        <div style={{
          width: 0, height: 0, opacity,
          borderLeft: `${s * 0.5}px solid transparent`,
          borderRight: `${s * 0.5}px solid transparent`,
          borderBottom: `${s * 0.85}px solid ${color}`,
        }} />
      )
    case 'diamond':
      return <div style={{ width: s * 0.7, height: s * 0.7, background: color, opacity, transform: 'rotate(45deg)', borderRadius: s * 0.1 }} />
    case 'cross':
      return (
        <div style={{ position: 'relative', width: s, height: s, opacity }}>
          <div style={{ position: 'absolute', top: '40%', left: 0, width: '100%', height: '20%', background: color, borderRadius: 2 }} />
          <div style={{ position: 'absolute', left: '40%', top: 0, width: '20%', height: '100%', background: color, borderRadius: 2 }} />
        </div>
      )
    case 'ring':
      return <div style={{ width: s, height: s, borderRadius: '50%', border: `${Math.max(2, s * 0.15)}px solid ${color}`, opacity }} />
    default:
      return <div style={{ width: s, height: s, borderRadius: '50%', background: color, opacity }} />
  }
}

function DecorItem({ item, styleId }) {
  const elRef = useRef(null)
  const pos = useRef({ x: item.x, y: item.y })
  const vel = useRef({ x: item.vx, y: item.vy })

  useEffect(() => {
    let raf
    const tick = () => {
      pos.current.x += vel.current.x
      pos.current.y += vel.current.y

      const maxX = window.innerWidth - 40
      const maxY = window.innerHeight - 40
      if (pos.current.x <= 0 || pos.current.x >= maxX) vel.current.x *= -1
      if (pos.current.y <= 0 || pos.current.y >= maxY) vel.current.y *= -1
      pos.current.x = Math.max(0, Math.min(maxX, pos.current.x))
      pos.current.y = Math.max(0, Math.min(maxY, pos.current.y))

      if (elRef.current) {
        elRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) rotate(${item.rotation}deg)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [item.rotation])

  return (
    <div
      ref={elRef}
      className="fixed top-0 left-0 pointer-events-none"
      style={{ willChange: 'transform', zIndex: 1 }}
    >
      {styleId === 'scifi' ? (
        <span style={{
          fontFamily: "'Share Tech Mono', monospace",
          color: 'var(--accent)',
          fontSize: `${item.size}px`,
          opacity: item.opacity,
          userSelect: 'none',
        }}>
          {item.text}
        </span>
      ) : styleId === 'playful' ? (
        <PlayfulShape
          shape={item.shape}
          size={item.size}
          color="var(--accent)"
          opacity={item.opacity}
        />
      ) : null}
    </div>
  )
}

export default function FloatingDecor() {
  const { currentStyle } = useTheme()
  const styleId = currentStyle.id

  const items = useMemo(() => {
    if (styleId === 'scifi') {
      return Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * (window.innerWidth - 60),
        y: Math.random() * (window.innerHeight - 60),
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: 9 + Math.random() * 5,
        opacity: 0.06 + Math.random() * 0.1,
        rotation: Math.random() * 20 - 10,
        text: SCIFI_ELEMENTS[i % SCIFI_ELEMENTS.length],
      }))
    }
    if (styleId === 'playful') {
      return Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * (window.innerWidth - 60),
        y: Math.random() * (window.innerHeight - 60),
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 8 + Math.random() * 18,
        opacity: 0.06 + Math.random() * 0.14,
        rotation: Math.random() * 360,
        shape: PLAYFUL_SHAPES[i % PLAYFUL_SHAPES.length],
      }))
    }
    return []
  }, [styleId])

  if (styleId === 'minimal') return null

  return (
    <>
      {items.map(item => (
        <DecorItem key={`${styleId}-${item.id}`} item={item} styleId={styleId} />
      ))}
    </>
  )
}
