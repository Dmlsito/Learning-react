import '../css/Product.css' 
import { AddToCartIcon } from './icons.jsx'

export function Products ({products}) {
    const { addToCart } = useCart()
    return(
        <main className='products'>
        <ul>
            {products.slice(0,10).map(product => {
                return <li key={product.id}>
                    <img src={product.thumbnail}
                    alt={product.title} />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button onClick={() => addToCart(product)}>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            })}
        </ul>
        </main>
    )
}

      