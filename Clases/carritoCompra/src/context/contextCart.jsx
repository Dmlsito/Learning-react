import { useContext, useState } from 'react'

export const CartContext = useContext()

export function CartProvider ({children}) {
    const [ cart, setCart ] = useState([])

    const addToCart = product => {
        // Esta seria la forma sencilla y la mas basica para anadir a un estado que contenga un array una nueva cantidad
        // setCart([...cart, product])
        // Buscamos en el carrito si el producto que estamos pasando su id, es igual al de algunos
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
         
        // Si producto esta en el carrito
        
        if(productInCartIndex >= 0) {
            // De esta forma estamos haciendo una copia profunda
            // con el structureClone podemos hacer una copia profunda de los arrays y objectos
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart)
        }

        // Si el producto esta en el carrito

        setCart(prevState => ([
            ...prevState, { ...product, quantity: 1}
            
        ]))
    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart, 
            addToCart,
            clearCart

        }}>{children}
        </CartContext.Provider>
    )
}