import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './css/index.css'
import { FiltersProvider } from './context/contextFilters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    //De esta forma lo que estamos haciendo es envolver toda la aplicacion con el proveedor
    // del contexto para que todos los componentes que cuelguen de App tengan 
    // accedo a este contexto
    <FiltersProvider>
        <App />
    </FiltersProvider>
)
