import { useState, useRef, useMemo, useCallback} from 'react'
import { searchMovies } from '../logic/movies'

export function useMovies  ({search, sort})  {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError]  = useState(null)
    // Utilizamos el useRef para guardar la busqueda anterior //
    const previusSearch  = useRef()
    
    // Esta funcion solo se va a volver a ejecutar cuando cambie el valor de search
    const getMovies = useCallback(
        // De esta forma le estamos inyectando el valor por parametro entonces su ejecucion va a depender de cuando le pasemos este valor
        // que sera cada vez que clickemos en el boton de buscar 

        // Ahora introduciremos otro customHook, el useCallback
        // bien el useCallback esta pensado para que se utilice cuando el useMemo retorna una funcion
         async ({ search }) => {
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
}, [])
    // Aqui tenemos que tener en cuenta una cosa, cada vez que cambie el input se volvera a renderizar todo este componente
    // por lo que se estara ejecutando el ordenamiento de peliculas una y otra vez //
    // Para que esto no ocurra utilizaremos el customHook useMemo //
    // Ordenamos las peliculas por titulos
    // De esta forma aqui estamos haciendo lo siguiente -> 
    // El valor de sortedMovies solo se volvera a actualizar cuando las peliculas hayan cambiado o cuando se checkee otra vez
   const sortedMovies = useMemo(() => {
    console.log('el valor de sortedMovies ha cambiado')
    return sort ? [...movies].sort((a, b)=>{ return a.title.localeCompare(b.title)}) : movies
   }, [sort, movies])

    

    return {movies: sortedMovies, getMovies, error, loading}


}