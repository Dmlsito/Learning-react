import { FiltersContext} from  '../context/contextFilters.jsx'
import { useContext } from 'react'

export function useFilters () {

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })
  // En vez de consumir los filtros del UseState que hemos creado vamos a consumirlos del contexto //
  const {filters, setFilters} = useContext(FiltersContext)

// ESTO ES MUY IMPORTANTE PORQUE ES PARA JUNIORS //
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
        )
    })
  }

  return { filterProducts, setFilters, filters }
}
