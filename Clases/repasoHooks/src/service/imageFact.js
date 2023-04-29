export const getRandomImage = async () => {
    const data = await fetch('https://cataas.com/cat?json=true')
    .then(res => res.json())
    const {url} = data
    return url // -> promise with the URL
}