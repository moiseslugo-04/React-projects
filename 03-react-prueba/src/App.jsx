import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import { Another } from './components/another'
export function App() {
  const { fact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })
  // Get a new Fact
  const handleClick = async () => {
    useCatFact()
  }

  return (
    <main>
      <h1>app cat</h1>
      <button onClick={handleClick}>Get New </button>
      {fact && <p>{fact}</p>}
      {imgUrl && (
        <img src={imgUrl} alt='image extracted using the three first words' />
      )}
      <Another />
    </main>
  )
}
