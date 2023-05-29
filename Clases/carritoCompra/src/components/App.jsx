import { useState } from 'react'
import { Products } from './Product.jsx'
import { products as initialProducts} from '../mocks/products.json'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from '../hooks/useFilters.js'
import { Cart } from './Cart.jsx'
import { CartProvider } from '../context/contextCart.jsx'


function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
    <main>
    <Header />
    <Cart />
    <Products products={filteredProducts}/>
    { IS_DEVELOPMENT && <Footer /> }
    </main>
    </CartProvider>
  )
}

export default App
