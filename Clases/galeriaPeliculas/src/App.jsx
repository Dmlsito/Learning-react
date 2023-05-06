import { useState, useEffect} from 'react'
import './css/App.css'
import { Movies } from './components/Movies'
const API_KEY = '64561d39'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)

  const getMovies = async ({search}) => {
  const newMovies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`).then(res => res.json())
  setMovies(newMovies.Search)
  }

  const handleSubmit = e => {
    e.preventDefault()
    getMovies({search})
    
  }
  const handleChange = e => {
    setSearch(e.target.value)

  }

  useEffect(()=>{
    if(search === ''){
      setError('The search is empty')
      return
    }
    else if(search.length < 3){
      setError('La busqueda tiene que tener mas de tres palabras')
      return
    }
    setError(null)

  }, [search])

  return( 
    <div className='App'>
    <header>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search film' onChange={handleChange} value={search}></input>
        <button type='submit' >Buscar</button>
      </form>
    </header>
    {error && <p style={{
      color: 'red'
    }}>{error}</p>}
    <main>
    <Movies movies={movies}/>
    </main>
    </div>
  )
} 

export default App
