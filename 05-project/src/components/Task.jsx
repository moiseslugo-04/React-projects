import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
export const Task = ({ title, description, completed, id }) => {
  const { handleTaskCompletion } = useContext(TaskContext)
  function handleCheck() {
    handleTaskCompletion(id, completed)
  }
  function handleDelete() {
    handleTaskCompletion(id)
  }
  return (
    <div className='task-card'>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className='btn'>
        {completed ? (
          'completed ✔'
        ) : (
          <>
            <label htmlFor={id}>Completed</label>
            <input type='checkbox' id={id} onChange={handleCheck} />
          </>
        )}
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  )
}
