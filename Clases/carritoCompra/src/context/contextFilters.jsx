import { createContext, useState} from 'react'

// Para crear el contexto tenemos que hacer los siguientes pasos

//1. Creamos el context
//Nota: Este es el que tenemos que consumir
export const FiltersContext = createContext()
    
//2.Crear el provider para proveer el contexto
//Nota: Este es el que nos provee de acceso al contexto
export function FiltersProvider ({children}) {
    //Creamos un estado que pueda actualizar los filtros//
    // Asi esto es lo que despues vamos a servir y tendriamos un estado global //
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 100
    })
    return (
        <FiltersContext.Provider value={{
            //Dentro definiremos la informacion a la que queremos acceder //
            // category: 'all',
            // minPrice: 0
            //Ahora, para que nuestro contexto no sea estatico, necesitamos pasarle
            // tanto los filters, como una forma de actualizar los filters
            filters, 
            setFilters
        }}>{children}</FiltersContext.Provider>
    )
}