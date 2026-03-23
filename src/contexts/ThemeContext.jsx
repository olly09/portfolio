import React, { createContext, useContext, useState, useEffect } from 'react'

const palettes = [
  { id: 'cyan', name: 'Cyber Cyan', accent: '#00f0ff' },
  { id: 'pink', name: 'Neon Pink', accent: '#ff2d95' },
  { id: 'green', name: 'Matrix', accent: '#00ff41' },
  { id: 'orange', name: 'Solar Flare', accent: '#ff9500' },
  { id: 'blue', name: 'Arctic', accent: '#0066cc' },
]

const visualStyles = [
  {
    id: 'scifi',
    name: 'Sci-Fi',
    description: 'Retro terminal',
    fontDisplay: "'Orbitron', sans-serif",
    fontMono: "'Share Tech Mono', monospace",
    scanlines: true,
    gridBg: true,
    bubbleShape: 'circle',
    cubeStyle: 'translucent',
    bgExtra: 'none',
    borderRadius: '0px',
    glowIntensity: 'high',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Elegant & refined',
    fontDisplay: "'Inter', 'Segoe UI', sans-serif",
    fontMono: "'JetBrains Mono', 'Consolas', monospace",
    scanlines: false,
    gridBg: false,
    bubbleShape: 'rounded',
    cubeStyle: 'solid',
    bgExtra: 'geometric',
    borderRadius: '12px',
    glowIntensity: 'low',
  },
  {
    id: 'playful',
    name: 'Playful',
    description: 'Fun & vibrant',
    fontDisplay: "'Fredoka', 'Nunito', sans-serif",
    fontMono: "'Nunito', sans-serif",
    scanlines: false,
    gridBg: false,
    bubbleShape: 'mixed',
    cubeStyle: 'gradient',
    bgExtra: 'gradient',
    borderRadius: '24px',
    glowIntensity: 'medium',
  },
]

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [palette, setPalette] = useState('cyan')
  const [style, setStyle] = useState('scifi')

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-palette', palette)
    root.setAttribute('data-style', style)

    const s = visualStyles.find(v => v.id === style)
    if (s) {
      root.style.setProperty('--font-display', s.fontDisplay)
      root.style.setProperty('--font-mono', s.fontMono)
      root.style.setProperty('--border-radius', s.borderRadius)
    }
  }, [palette, style])

  const currentStyle = visualStyles.find(v => v.id === style) || visualStyles[0]
  const currentPalette = palettes.find(p => p.id === palette) || palettes[0]

  return (
    <ThemeContext.Provider value={{
      palette, setPalette, palettes,
      style, setStyle, visualStyles,
      currentStyle, currentPalette,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
