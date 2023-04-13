import { useState } from 'react'
import { FollowMouse } from './components/FollowMouse'
import './App.css'

const App = () => {
  const [enabled, setEnabled] = useState(false)
  const handleClick = () => {
    setEnabled(!enabled)
  }
  return (
    <main>
      <FollowMouse enabled={enabled} />
      <button onClick={handleClick}>{enabled ? 'Desactivar' : 'activar'} seguir puntero</button>
    </main>
  )
}
export default App
