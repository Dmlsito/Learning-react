const app = document.querySelector(".app")
const h = React.createElement

const avatar = params => {
    return h("img", {src: `https://randomuser.me/api/portraits/men/${params.id}.jpg`})
}

//Para poder utilizar el componente que hemos creado, primero debemos renderizarlo, utilizando la constante que hemos creado
//y pasandole lo que queremos renderizar, a mayores le tendremos que pasar los parametros
//Por ultimo, le pasamos un segundo parametro en el que indicamos donde queremos renderizar el componente
//IMPORTANTE, ESTO NO ES LO OPTIMO YA QUE AQUI ESTAMOS UTILIZANDO REACT DE LA FORMA MAS 'CRUDA' por ello se utiliza
//jsx que lo veremos mas adelante
ReactDOM.render(h(avatar, {id: 1}), app)

//