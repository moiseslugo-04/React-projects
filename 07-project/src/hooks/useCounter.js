import { useState } from 'react'

export const useCounter = (initial) => {
  const [counter, setCounter] = useState(initial)

  const increment = (value = 1) => {
    setCounter(counter + value)
  }
  const decrement = (value = 1) => {
    if (counter - value < 0) return
    setCounter(counter - value)
  }
  const reset = () => {
    setCounter(0)
  }
  return { increment, decrement, reset, counter }
}
