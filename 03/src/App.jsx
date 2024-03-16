import { useEffect, useState } from 'react'
import './App.css'
//const CAT_ENDPOINT_IMAGE_URL =
//;`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_FACT_IMG_URL = 'https://cataas.com/cat/'

export function App() {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  useEffect(() => {
    if (!fact) return
    const ThreeFirstWords = fact.split(' ', [3]).join()
    console.log(ThreeFirstWords)
    fetch(
      `https://cataas.com/cat/says/${ThreeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response
        setImgUrl(_id)
      })
  }, [fact])
  return (
    <main>
      <h1>app cat</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && (
        <img
          src={CAT_FACT_IMG_URL + imgUrl}
          alt='image extrated using the three frist words'
        />
      )}
    </main>
  )
}
