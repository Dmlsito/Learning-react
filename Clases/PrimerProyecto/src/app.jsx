import {FollowCard} from "./TwitterFollowCard.jsx"
import {useState} from "react";
import "./App.css"
//Componente App
export const App = () => {
    //const [name, setName] = useState("midudev")
    //Estado aplicacion
    const [isFollowing, setIsFollowing] = useState(false)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    console.log("App render with isFollowing: ", {isFollowing})
    //Funcion para formatear el userName y agregarle  el @
    //Aqui como podemos ver le estamos pasando la funcion a secas, es decir, le estamos diciendo que ejecute la funcion, 
    //porque si le pasaramos la ejecucion de la funcion esta no estaria devolviendo nada y seria undefined
    //const formattedUserName = userName =>  `@${userName}`
    //A parte de poder pasar funciones como props le podemos pasar elementos, como por ejemplo este
    const formattedUserName = <span>@midudev</span>
    //La diferencia es que un componente es una factoria de elementos, es decir los componentes crean elementos y los elementos
    //son los que React renderiza
    //Existe otra forma de pasar todas las props a un componente y es mediante el uso de objetos
    //Creamos una constante en la que le pasamos un objeto con las props y sus valores y evaluamos todas sus propiedades entre llaves
    //Esto no es muy bueno practica, ya que algunas veces no queremos pasar todas las props o, en algunos casos, esto hace 
    //que el componente se renderice varias veces
    //const midudev = {formattedUserName: formattedUserName, userName: {name}} 
    return (
        //Si quisieramos reutilizar el componente necesitariamos envolver todo en un React.Fragment
        //PARA EVITARNOS PONER REACT.FRAGMENT PODEMOS PONERLO DE ESTA FORMA
        <div className = "App">
            <FollowCard userName = "midudev" formattedUserName = {formattedUserName} initialIsFollowing = {isFollowing}>
            Daniel Mallo Lopez
            </FollowCard>
            <button onClick = {handleClick}>Cambiar estado</button>
        </div>
    )
}

//Existen dos formas de que un componente se renderice, que se actualice su estado o que el estado del componente padre cambie
//En este caso como al darle al boton 'cambio nombre' estamos actualizando el estado de la app se va a renderizar esta y los componentes
//que esta alberga