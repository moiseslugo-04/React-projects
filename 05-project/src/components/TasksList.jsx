import { Task } from './Task'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
export const TasksList = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <div className='task'>
      <h1>Task Lits</h1>
      <div className='task-content'>
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              title={task.title}
              description={task.description}
              completed={task.completed}
              id={index}
            />
          )
        })}
      </div>
    </div>
  )
}
