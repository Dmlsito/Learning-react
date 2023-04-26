import {useEffect, useState} from 'react'
// TEORIA DE LOS CUSTOM HOOKS
// Para crear un custom hook tenemos que crear una funcion que empiece por use //
 // de esta forma react sabe que nos estamos refiriendo a un Custoom Hook //
// La diferencia entre un custom Hook y una funcion normal es que en una funcion normal //
// tu no puedes llamar a otros hooks, mientras que en un customHook si //
const PREFIX_CAT_IMAGE = 'https://cataas.com'

export const useCatImage = ({ fact }) => {
    const [imageURL, setImageURL] = useState('')
  
    useEffect(() => {
      if(!fact)
      return
      fetch(`https://cataas.com/cat?json=true`)
      .then(res => res.json())
      .then(res => {
        const { url } = res
        setImageURL(url)
      })
    },[fact])
  
    return { imageURL: `${PREFIX_CAT_IMAGE}${imageURL}` } // -> imageUrl
}