import {useState} from "react"

//Podemos pasar funciones tambien, por ejemplo aqui le estamos pasando un funcion de formateo
//Existe una prop especial que son los childrens, que hace referencia a todo lo que el componente envuelve, como en este caso 
//el componente esta envolviendo a un texto que es el nombre del usuario, podemos evaluar y renderizar ese nombre
//Esta prop especial puede hacer referencia a cualquier cosa, no a solo una cadena de texto, por ejemplo a un componente, elementos...
export const FollowCard = ({formattedUserName, userName = "unknown", children, initialIsFollowing}) => {
    console.log("Este componente se esta renderizando", {userName});
    //El estado lo tenemos que guardar en una constante
    //Tendremos que decirle un valor inicial
    //Como javaScript tiene una cosa que se llama desestructuracion, podemos desestructurar lo que nos devuelve el useState en una array
    //const state = useState(false)
    //Como lo podemos ver en la siguiente linea
    //Lo que hacemos pasando el initialIsFollowing, es decir, le estamos pasando una prop, lo que estamos haciendo es inicializar
    //el estado con una prop
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    //Esto nos devuelve un array de dos posiciones, la primera es lo que nos deja acceder al estado y la segunda es la que nos
    //deja modificar ese estado
    console.log(isFollowing);
    //Lo que estamos haciendo aqui si llema renderizado condicional
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "tw-follow-card-button is-following": "tw-follow-card-button";
    
    const handleClick = () => {
        //Lo que hacemos aqui es acceder al setIsFollowing y cambiamos el valor de isFollowing
        setIsFollowing(!isFollowing)
    }

    return (
        //Cuando queremos utilizar sselectores en nuestros componentes de react es mejor utilizar classnames en vez de id
        //para que nuestro componente se pueda reutilizar   
        <article className = "tw-follow-card">
            <header className = "tw-follow-card-header">
                <img src = {`https://unavatar.io/${userName}`} alt = "Avatar" className = "tw-follow-card-avatar"/>
                <div className = "tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className = "tw-follow-card-infoUserName">{formattedUserName}</span>
                </div>
            </header>
            <aside>
                <button className = {buttonClassName} onClick = {handleClick}>{text}</button>
            </aside>
        </article>
    )
}

//Apuntes -> las props deberian ser inmutables, es decir si nosotros le pasamos una prop a un componente y la modificamos
//es una muy mala practica, lo que es buena practica es crear una constante con otro nombre que mofique el valor de esta prop
//Si queremos mostrar algo en el caso de que el valor de la prop venga vacia al igualarla a algo en el lugar donde estamos 
//evaluando le estariamos diciendo que si esto ocurre que muestre esa informacion