import { useCatImage } from '../hooks/useCatImage'
export const Another = () => {
  const { imgUrl } = useCatImage({ fact: 'cat' })
  return <>{imgUrl && <img src={imgUrl} alt='cat' />}</>
}
