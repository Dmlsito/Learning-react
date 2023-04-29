
const URL_CAT_API= 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const data = await fetch(URL_CAT_API)
    .then(res => res.json())
    const {fact} = data
    return fact // -> retorno una promesa con el dato fact
}