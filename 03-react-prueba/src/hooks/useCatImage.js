// Custom Hooks
import { useEffect, useState } from 'react'
const CAT_FACT_IMG_URL = 'https://cataas.com/cat/'

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState()
  // Get img
  useEffect(() => {
    if (!fact) return
    const ThreeFirstWords = fact.split(' ', [3]).join()
    fetch(
      `https://cataas.com/cat/says/${ThreeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response
        setImgUrl(_id)
      })
  }, [fact])

  return { imgUrl: `${CAT_FACT_IMG_URL}${imgUrl}` }
}
