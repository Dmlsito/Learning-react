import '../css/App.css'
import { useRandomImage } from '../hooks/useRandomImage'
import { useCatFact} from '../hooks/useRandomFact'

function App() {
  const {fact, refreshFact} = useCatFact()
  const {imageURL} = useRandomImage({fact})
    
  const handleClick = () => {
       refreshFact()
  }

  return (
    <main>
        <h2>Informacion sobre gatitos</h2>
        <p>{fact}</p>
        <button onClick={handleClick}>Get new fact</button>
        <picture>
            <img src={imageURL}/>
        </picture>
    </main>
  )
}

export default App
