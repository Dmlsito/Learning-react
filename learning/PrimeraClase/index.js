//IMPORTANTE => NOSOTROS PODEMO IMPORTAR REACT SIN TENER QUE UTILIZAR NINGUN EMPAQUETADOR, AL FIN Y AL ACABO ES UNA 
//BIBLIOTECA
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const app = document.querySelector(".app");

//Primero de todo tenemos que crear el root, que sera nuestro 'tronco'

const root = ReactDOM.createRoot(app);
//Para crear un elemento tenemos que indicarle tres parametros, el tipo de elemento, los parametros de dicho elemento y 
// el texto que contendra el elemento

const button1 = React.createElement("button1", {"data-id": 123}, "Button1")
const button2 = React.createElement("button2", {"data-id": 456}, "Button2")
const button3 = React.createElement("button3", {"data-id": 789}, "Button3")
//Aqui le indicamos que la raiz nos renderice lo que nosotros queramos, podemos pasarle cualquier cosa
//IMPORTANTE EN REACT NO PODEMOS DECIRLE QUE RENDERIZE HTML, tenemos nosotros que crear, previamente, el componente y despues
//decirle que renderize dicho componente

//Ahora ya estamos renderizando un elemento button
//Tenemos que tener en cuenta que no podemos renderizar mas de un elemento, lo que tendriamos que hacer es tener un elemento
//que envuelva al resto de elementos
//De esta forma tenemos un div que envuelve los tres elementos
const div = React.createElement(React.Fragment, null, [button1, button2, button3])
root.render(button)

//Esto es react puro, pero no es de la forma en la que vamos a programar en un futuro, esto seria React sin JSX