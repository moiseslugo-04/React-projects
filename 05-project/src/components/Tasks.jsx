import { TaskCard } from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
export function Tasks() {
  const { tasks } = useContext(TaskContext)
  return (
    <>
      {tasks.length !== 0 ? (
        <div className='grid  grid-cols-4 gap-2'>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              id={task.id}
            />
          ))}
        </div>
      ) : (
        <h1 className='text-white  text-4xl font-bold text-center'>
          There are no Tasks yet
        </h1>
      )}
    </>
  )
}
