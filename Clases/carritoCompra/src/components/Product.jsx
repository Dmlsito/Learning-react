import '../css/Product.css' 
import { AddToCartIcon, RemoveFromCartIcon } from './icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({products}) {
    const { addToCart, cart, removeCart } = useCart()

    // Va a checkear si el producto que se va a introducir en el carrito esta o no ya en el carrito
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return(
        <main className='products'>
        <ul>
            {products.slice(0,10).map(product => {
                // true o false si esta o no en el carrito
                const isProductInCart = checkProductInCart(product)

                return <li key={product.id}>
                    <img src={product.thumbnail}
                    alt={product.title} />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button style = {{ backgroundColor: isProductInCart ? 'red': '#09f'}}
                            onClick={() =>  { 
                                isProductInCart ? removeCart(product) : addToCart(product)
                            }}>
                                {
                                    isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                }
                        </button>
                    </div>
                </li>
            })}
        </ul>
        </main>
    )
}

      