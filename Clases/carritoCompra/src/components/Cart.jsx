import { AddToCartIcon, ClearCartIcon, CartIcon } from "./icons";
import '../css/Cart.css'
import { useId } from "react";

export function Cart () {

   const cartCheckBoxId = useId()
   
   return ( 
   <main>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
            <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkBox" hidden></input>
        <aside className='cart'>
            <ul>
                <li>
                    <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                        alt="Iphone"
                    />
                    <div>
                        <strong>Iphone</strong>
                    </div>
                    <footer>
                        <small>Qt1: 1</small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </main>
    )
}