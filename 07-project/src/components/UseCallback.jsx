import { useCallback, useState } from 'react'
import { CounterCallback } from './CounterCallback'

export const UseCallback = () => {
  const [counter, setCounter] = useState(0)
  const more = useCallback((value) => {
    return setCounter((preValue) => preValue + value)
  }, [])
  return (
    <div>
      <h1>counter : {counter}</h1>
      <CounterCallback more={more} />
    </div>
  )
}
