import { createContext, useEffect, useState } from 'react'
export const TaskContext = createContext()
import { tasks as data } from '../data/tasks'

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])
  useEffect(() => setTasks(data), [])
  const createTask = (title, description) => {
    setTasks([
      ...tasks,
      {
        title,
        id: tasks.length,
        description,
      },
    ])
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
