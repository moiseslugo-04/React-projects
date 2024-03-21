import { useState } from 'react'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
export function Form() {
  const { createTask } = useContext(TaskContext)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    createTask(title, description)
    setTitle('')
    setDescription('')
  }
  return (
    <div className='max-w-md mx-auto'>
      <form
        action=''
        onSubmit={handleSubmit}
        className='bg-slate-800 p-10 mb-4'
      >
        <h1 className='text-2xl text-white mb-3'>create your task </h1>
        <input
          type='text'
          placeholder='write your task'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea
          className='bg-slate-300 p-3 w-full mb-2'
          onChange={(e) => setDescription(e.target.value)}
          placeholder='describe your task'
          cols='30'
          rows='2'
          value={description}
        ></textarea>
        <button className='bg-indigo-500 px-3 py-1 text-white '>Save</button>
      </form>
    </div>
  )
}
