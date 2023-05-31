import { AddToCartIcon, ClearCartIcon, CartIcon } from "./icons";
import '../css/Cart.css'
import { useId } from "react";
import { useCart } from "../hooks/useCart";

function CartItem ({thumbnail, price, title, quantity, addToCart}) {
    return (
        <li>
        <img src={thumbnail}
            alt={title}
        />
        <div>
            <strong>{title}</strong> - ${price}
        </div>
        <footer>
            <small>Qt: {quantity}</small>
            <button onClick={addToCart}>+</button>
        </footer>
    </li>
    )
}
export function Cart () {

   const cartCheckBoxId = useId()
   const {cart, clearCart, addToCart } = useCart()
   
   return ( 
   <main>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkBox" hidden></input>
        <aside className='cart'>
            <ul>
            { cart.map(product => {
               return <CartItem key={product.id} {...product} addToCart = { () => {addToCart(product)}}/>
            })}
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </main>
    )
}