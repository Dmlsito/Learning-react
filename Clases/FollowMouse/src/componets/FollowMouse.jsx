import { useState, useEffect } from 'react'

export const FollowMouse = ({ enabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Se ejecuta cada vez que se cambie el estado de enabled //
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Clean up //
    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])
  return (
    <div style={{
      transform: `translate(${position.x}px, ${position.y}px)`,
      position: 'absolute',
      background: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40
    }}
    />
  )
}
