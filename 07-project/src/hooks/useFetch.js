import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  })
  useEffect(() => {
    let isMounted = true // flag to track if the component is mounted
    fetch(url)
      .then((res) => {
        if (!isMounted) return // check if it's mounted
        if (!res.ok) {
          throw new Error(`HTTPS error! status ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (!isMounted) return
        setState({ data, isLoading: false })
      })
      .catch((error) => {
        if (!isMounted) return
        return setState({ error, isLoading: false })
      })
  }, [url])
  return { ...state }
}
