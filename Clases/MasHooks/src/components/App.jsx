import '../css/App.css'
import { useState, useEffect, useRef } from 'react'
import { Movies } from './Movies'
import { useMovies } from '../hooks/useMovies'


const App = () => {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)
  // Con useReff podremos crear un valor que persista en un renderizado //
  // A parte de esto tambien es util para guardar referencias de un elemenot del dom, porque esa referencia persistira //
  const inputRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    
    // Tenemos que acceder a la propiedad current 
    const value = inputRef.current.value
   // Estas son dos forma de recuperar los datos de un input, la diferencia es que en una
   // estamos utilizando javascript vanilla y en otra estamos utilizando un hook de react

    const fields = new window.FormData(e.target)
    const query1 = fields.get('query')
    
    //Imaginemonos que tenemos 10 inputs y no queremos hacer ni 10 useRef y acceder uno por uno con el get
    // esta seria la forma de hacerlo

    const { query2 } = Object.fromEntries(new window.FormData(e.target))
    
    // En este punto estamos gestionando nuestro formulario de forma no controlada //
    // La forma controlado es cuando React tiene el control de lo que se escribe en nuestro formulario //
    console.log(query)
  }

  const handleChange = e => {
    //De esta forma controlamos el input // 

    // ATENCION: EL PROBLEMA QUE TIENE ESTO ES QUE AL ESTAR CAMBIANDO EL ESTADO CADA VEZ QUE CAMBIE EL INPUT SE ESTARA RENDERIZANDO LA APLICACION TODO EL RATO //
    // y en una aplicacion muy compleja esto puede provocar que el input vaya lento
    
    // Como el estado es asincrono tenemos si evaluamos query no estaremos evaluando el ultimo estado
    // por lo que tendremos que hacer lo siguiente
    const newQuery = e.target.value
    //Si da el caso de que no queremos setear el estado por ejemplo cuando el usuario ponga espacios
    // en blanco podemos hacer lo siguiente
    if(newQuery.startsWith(' '))
    return
    setQuery(newQuery)

    if(newQuery === ''){
      setError('No se puede buscar una pelicula vacia')
      //Escribimos un return para que no se siga ejecutando el efecto
      return
      }
      if(newQuery.length < 3){
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
      // Si no ocurre ninguno de estos tres errores seteamos a null //
      setError(null)
  }

  // Validacion de formulario de forma controlada

  return (
    <div className='App'>
      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input placeholder='Movie name' ref={inputRef} name='query' value={query} onChange={handleChange}></input>
          <button type='submit'>Buscar</button>
        </form>
      </header> 
      {error && <p style={{
        color: 'red'
      }}>{error}</p>}
      <main>
      <Movies movies={movies} />
      </main>
    </div>
    
  )
}
export default App