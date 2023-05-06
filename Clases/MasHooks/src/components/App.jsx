import '../css/App.css'
import { Movies } from './Movies'
import { useMovies } from '../hooks/useMovies'
import { useSearch } from '../hooks/useSearch'

const App = () => {
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, error2 } = useMovies({ search })
  const handleSubmit = e => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = e => {
   setSearch(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input placeholder='Movie name'  name='query' value={search} onChange={handleChange}></input>
          <button type='submit'>Buscar</button>
        </form>
      </header> 
      {error && <p style={{
        color: 'red'
      }}>{error}</p>}
      <main>
      {loading && <p>Cargando...</p>}
      <Movies movies={movies} />
      </main>
    </div>
    
  )
}
export default App