import { useContext } from 'react'
import { CartContext } from '../context/contextCart'


export const useCart = () => {
    const context = useContext(CartContext)
    // Es muy buena practica revisar si el contexto es undefined, ANTES DE NADA
    if(context === undefined) {
        throw new Error('El componente no esta envuelto en el CartProvider')
    }

    return context

}