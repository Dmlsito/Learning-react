import '../css/Filters.css'
import { useState } from 'react'

export function Filters ({changeFilters}) {

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = e => {
        setMinPrice(e.target.value)
        changeFilters(prevState => {
            // Actualiamos el estado retornando como categoria la categoria que ya estaba y como 
            // precio minimo el precio actualizado //
            return {
                ...prevState,
                minPrice: e.target.value
            }
        })
    } 

    const handleChangeCategory = e => {
        // Tanto en esta funcion como en la otra estamos pasando una funcion de actualizar estado nativa de react 
        // a un componente hijo y estas cosas las vamos a queres evitar
        changeFilters(prevState => {
            return {
                ...prevState,
                category: e.target.value
            }
        })
    }

    return (
        <section className="filters">
        <div>
            <label htmlFor='Price'>Min.price</label>
            <input type="range" id="price" min='0' max='1000' onChange={handleChangeMinPrice}/>
            <span>${minPrice}</span>
        </div>
        <div>
            <label htmlFor="category">Category</label>
            <select id="category" onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value='laptops'>Laptops</option>
                <option value='smartphones'>Smartphones</option>
            </select>
        </div>
        </section>
    )
}