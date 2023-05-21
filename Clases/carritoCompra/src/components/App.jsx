import { useState } from 'react'
import { Products } from './Product.jsx'
import { products as initialProducts} from '../mocks/products.json'
import { Header } from './Header.jsx'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  const filteredProducts = filterProducts(products)

  return (
    <main>
    <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}/>
    </main>
  )
}

export default App
