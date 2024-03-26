import { memo } from 'react'

export const CounterCallback = memo(function CounterCallback({ more }) {
  console.log('first')

  return (
    <button className='btn btn-primary' onClick={() => more(1)}>
      more
    </button>
  )
})
