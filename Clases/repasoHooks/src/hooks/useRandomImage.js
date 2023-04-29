import { useState, useEffect } from 'react'
import { getRandomImage } from '../service/imageFact'
const PREFIX_CAT_IMAGE = 'https://cataas.com'

export const useRandomImage = ({fact}) => {
    const [imageURL, setImageURL] = useState()
    useEffect(() => {
        getRandomImage().then(res => setImageURL(res))
     }, [fact])
     return {imageURL: `${PREFIX_CAT_IMAGE}${imageURL}`}
}