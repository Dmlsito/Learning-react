import { useState, useEffect } from "react"

export const Component = () => {
    const [value, setValue] = useState(false);

    //El useEffect se utiliza en el cuerpo del componente
    useEffect(() => {
        //Como minimo esto se ejecutara una vez
        console.log("El codigo a ejecutar")
        //El segundo parametro que le pasaremos es un array, pero esto es optativo
        //IMPORTANTE -> si no ponemos depencias esto se ejecutara cada vez que se renderice el componente
        //Si ponemos un array vacio solo ejecutara la primera vez que se renderice el componente
        //De esta forma ahora lo que va a ocurrir es que se ejecutara la primera vez que se renderice el componente y
        //cuando cambie el estado del winner   
    }, [winner])
}