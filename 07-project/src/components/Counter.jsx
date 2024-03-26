import { useCounter } from '../hooks/useCounter'

export function Counter() {
  const { increment, decrement, reset, counter } = useCounter(0)

  return (
    <>
      <h1>counter {counter}</h1>
      <button className='btn btn-primary' onClick={() => increment(1)}>
        +1
      </button>
      <button className='btn btn-primary' onClick={() => decrement(1)}>
        -1
      </button>
      <button className='btn btn-danger' onClick={() => reset()}>
        Reset
      </button>
    </>
  )
}
