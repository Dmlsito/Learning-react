import { useState } from 'react'
import '../css/Footer.css'
import { useFilters } from '../hooks/useFilters'

export const Footer = () => {
    
    const { filters } = useFilters() 
    return (
        // Esto seria como una especie de debuger de estados //
        <footer className='footer'>
            {
               JSON.stringify(filters)
            }
        </footer>
    )
}