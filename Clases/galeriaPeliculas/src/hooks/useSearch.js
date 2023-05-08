import { useState, useRef, useEffect} from 'react'
 
export const useSearch = () => {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstTime = useRef(true)

    useEffect(()=>{
        if(isFirstTime.current){
          isFirstTime.current = search === ''
          return 
        }
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

      return {error, search, setSearch}
}