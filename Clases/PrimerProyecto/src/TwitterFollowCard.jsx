//Podemos pasar funciones tambien, por ejemplo aqui le estamos pasando un funcion de formateo
//Existe una prop especial que son los childrens, que hace referencia a todo lo que el componente envuelve, como en este caso 
//el componente esta envolviendo a un texto que es el nombre del usuario, podemos evaluar y renderizar ese nombre
export const FollowCard = ({formattedUserName, userName, name, isFollowing, children}) => {
    console.log(isFollowing);
    return (
        //Cuando queremos utilizar selectores en nuestros componentes de react es mejor utilizar classnames en vez de id
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
                <button>Seguir</button>
            </aside>
        </article>
    )
}

//Apuntes -> las props deberian ser inmutables, es decir si nosotros le pasamos una prop a un componente y la modificamos
//es una muy mala practica, lo que es buena practica es crear una constante con otro nombre que mofique el valor de esta prop