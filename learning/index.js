const app = document.querySelector(".app")

//Se podria decir que esto seria un componente de react
const Avatar = (params) => {
    const src = `https://randomuser.me/api/portraits/men/${params.id}.jpg`;
    return `<picture>
    <img src = "${src}"/>
    ${params.name}
</picture>`;
}

app.innerHTML += Avatar({id: 1, name: "Marc"})
app.innerHTML += Avatar({id: 2, name: "Daniel"})
//Como con querySelectorAll recuperamos todos tenemos que recorrer la lista que nos devuelve
app.querySelectorAll("img").forEach( (img) => {
    img.addEventListener("click", () => {
       //Creamos una clase y le anadimos un toggle, esto nos evitara crear estructuras condicionales
       img.classList.toggle("disabled");
    })
})