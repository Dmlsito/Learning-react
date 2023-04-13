import { useState, useEffect } from 'react'

export const FollowMouse = ({ enabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      // Desestructuramos //
      const { clientX, clientY } = event
      console.log(clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Limpiamos la subscripcion del evento //
    // Clean UP//
    // Esta funcion se va a ejecutar cuando cambie la dependecia o cuando se desmonte el componente//
    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: 0, y: 0 })
    }
  }, [enabled])
  return (
    <div
      className='bola' style={{
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
