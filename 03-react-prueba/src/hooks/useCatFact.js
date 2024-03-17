import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const getNewFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }
  useEffect(getNewFact, [])
  return { fact, getNewFact }
}
// Get text
