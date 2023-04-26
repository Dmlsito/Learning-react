import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'
export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    const refreshFact = () => {
      getRandomFact().then(res => setFact(res))
    }
    useEffect(refreshFact, [])
    return { fact, refreshFact}
  } // -> es mala practica en los custom hooks darles un nombre en los que estes diciendo que hacen //