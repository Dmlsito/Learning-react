import { useState, useEffect, useRef} from 'react'
import { useSearch } from '../hooks/useSearch'
import '../css/App.css'
import { Movies } from './Movies'
import { useMovies } from '../hooks/useMovies'


function App() {
  const [sort, setSort] = useState(false)
  const {error, search, setSearch, loading} = useSearch()
  const {movies, getMovies} = useMovies({search, sort})

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = e => {
    e.preventDefault()
    getMovies()
  }
  const handleChange = e => {
    setSearch(e.target.value)

  }
  return( 
    <div className='App'>
    <header>
      <form onSubmit={handleSubmit}>
      <input type='checkbox' onChange={handleSort} checked={sort}/>
        <input placeholder='Search film' onChange={handleChange} value={search}></input>
        <button type='submit' >Buscar</button>
      </form>
    </header>
    {error && <p style={{
      color: 'red'
    }}>{error}</p>}
    {loading && <p>Cargando...</p>}
    <main className='App-main'>
    <Movies movies={movies} />
    </main>
    </div>
  )
} 

export default App
