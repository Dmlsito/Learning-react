import { useState, useEffect } from 'react'
import { getRandomFact } from '../service/fact'

export const useCatFact = () => {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getRandomFact().then(res => setFact(res))
    }
    useEffect(refreshFact, [])

    return {fact, refreshFact}
    
}