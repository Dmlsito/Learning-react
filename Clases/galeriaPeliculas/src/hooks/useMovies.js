import { useState, useRef} from 'react'
import { searchMovies } from '../logic/movies'

export function useMovies  ({search, sort})  {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError]  = useState(null)
    // Utilizamos el useRef para guardar la busqueda anterior //
    const previusSearch  = useRef()
    
    const getMovies = async () => {
        if(search === previusSearch.current) {
            console.log('Busqueda repetida')
            return
        }
        try{
            setLoading(true)
            setError(null)
            previusSearch.current = search
           console.log('lo que has buscado es: ', previusSearch.current)
           const newMovies = await searchMovies({search})
           setMovies(newMovies)
        }catch(e){
            setError(e.message)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }
    // Ordenamos las peliculas por titulos
    const sortMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    console.log(movies)

    return {movies: sortMovies, getMovies, error, loading}


}