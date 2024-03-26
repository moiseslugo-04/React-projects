import { useMemo, useState } from 'react'

export const UseMemo = () => {
  const [show, setShow] = useState(false)
  const [numbers, setNumbers] = useState([2, 93, 84, 5, 6])
  function addNumber() {
    setNumbers([...numbers, numbers[numbers.length - 1] + 1])
  }
  const useResult = (numbers) =>
    useMemo(() => {
      console.log('calculated')
      return numbers.reduce((a, b) => a * b)
    }, [numbers])

  return (
    <div>
      <p>{useResult(numbers)}</p>
      <button onClick={() => setShow(!show)}>{show ? 'show' : 'hide'}</button>
      <button onClick={() => addNumber()}>add one number</button>
    </div>
  )
}
