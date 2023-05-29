import '../css/Filters.css'
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

// UseId es un hook de react que te genera un id unico
export function Filters () {
    const { filters, setFilters } = useFilters()
    
    const minPriceFilterId = useId()
    const minCategoryFilterId = useId()

   // console.log({minPriceFilterId, minCategoryFilterId})

    const handleChangeMinPrice = e => {
        setFilters(prevState => {
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
        setFilters(prevState => {
            return {
                ...prevState,
                category: e.target.value
            }
        })
    }

    return (
        <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Min.price</label>
            <input type="range" id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice}/>
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={minCategoryFilterId}>Category</label>
            <select id={minCategoryFilterId} onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value='laptops'>Laptops</option>
                <option value='smartphones'>Smartphones</option>
            </select>
        </div>
        </section>
    )
}