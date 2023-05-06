import { useState, useEffect, useRef } from 'react'

export function useSearch () {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)
  
    useEffect(() => {
      if(isFirstInput.current){
        isFirstInput.current = search === '' // como las referencias no renderizan de nuevo el componente no se crearia un loop infinito
        return 
      }
      if(search === ''){
        setError('No se puede buscar una pelicula vacia')
        //Escribimos un return para que no se siga ejecutando el efecto
        return
        }
        if(search.length < 3){
          setError('La busqueda debe tener al menos 3 caracteres')
          return
        }
        // Si no ocurre ninguno de estos tres errores seteamos a null //
        setError(null)
  
    }, [search])
  
    return { search, setSearch, error }
  }