import { useState } from 'react'
import { FollowMouse } from './componets/FollowMouse'
import './App.css'
const App = () => {
  const [enabled, setEnabled] = useState(false)
  return (
    <main>
      <FollowMouse enabled={enabled} />
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Descactivar' : 'Activar'} seguir cursor</button>
    </main>
  )
}

export default App
