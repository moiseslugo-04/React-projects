import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'
export const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)
  function handleSubmit(e) {
    e.preventDefault()
    createTask(title, description)
    setDescription('')
    setTitle('')
  }
  return (
    <form>
      <input
        type='text'
        placeholder="Write The Task's Name please"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        cols='30'
        rows='3'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <input type='submit' value='Save ' onClick={(e) => handleSubmit(e)} />
    </form>
  )
}
