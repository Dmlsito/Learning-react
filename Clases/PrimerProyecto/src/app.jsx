import {FollowCard} from "./TwitterFollowCard.jsx"
import "./App.css"
//Componente App
export const App = () => {
    //Funcion para formatear el userName y agregarle  el @
    //Aqui como podemos ver le estamos pasando la funcion a secas, es decir, le estamos diciendo que ejecute la funcion, 
    //porque si le pasaramos la ejecucion de la funcion esta no estaria devolviendo nada y seria undefined
    //const formattedUserName = userName =>  `@${userName}`
    //A parte de poder pasar funciones como props le podemos pasar elementos, como por ejemplo este
    const formattedUserName = <span>@midudev</span>
    //La diferencia es que un componente es una factoria de elementos, es decir los componentes crean elementos y los elementos
    //son los que React renderiza
    return (
        //Si quisieramos reutilizar el componente necesitariamos envolver todo en un React.Fragment
        //PARA EVITARNOS PONER REACT.FRAGMENT PODEMOS PONERLO DE ESTA FORMA
        <div className = "App">
            <FollowCard formattedUserName={formattedUserName} isFollowing userName = "midudev">
            Daniel Mallo Lopez
            </FollowCard>
            <FollowCard formattedUserName={formattedUserName} isFollowing = {false} userName = "pheralb">
            Daniel Mallo Lopez
            </FollowCard>
            <FollowCard formattedUserName={formattedUserName} userName = "midudev">
            Daniel Mallo Lopez
            </FollowCard>
            <FollowCard formattedUserName={formattedUserName} userName = "pheralb">
            Daniel Mallo Lopez
            </FollowCard>
        </div>
    )
}
