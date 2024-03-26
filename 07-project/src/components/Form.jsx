import { useRef } from 'react'
import { useForm } from '../hooks/useForm'

export const Form = () => {
  const { inputChange, handleSubmit, username, email, password } = useForm()
  const inputRef = useRef()
  return (
    <>
      <h1>Form</h1>
      <div>
        <form>
          <div className='mb-3'>
            <label htmlFor='username' className='form-label'>
              User Name
            </label>
            <input
              type='text'
              className='form-control'
              id='username'
              onChange={inputChange}
              value={username}
              placeholder='Moises Lugo'
            />

            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={email}
              onChange={inputChange}
              placeholder='moiseslugo@gmail.com'
              ref={inputRef}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='password'
              value={password}
              onChange={inputChange}
              placeholder='1234567'
            />
          </div>

          <button className='btn btn-primary' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}
