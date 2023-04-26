import '../css/App.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'

const App = () => {
  const { fact, refreshFact } = useCatFact()
  const {imageURL} = useCatImage({fact})
  
  const handleClick = async () => {
    refreshFact()
  }
   
  return(
    <main className='App'>
      <header className='App-header'>
        <h1>Informacion de gatitos</h1>
        <button onClick={handleClick}>Get new fact</button>
      </header>
      <article className='App-article'>
        <p>{fact}</p>
        <img src={imageURL} className='App-article-img'/>
      </article>   
    </main>
  )
}

export default App
