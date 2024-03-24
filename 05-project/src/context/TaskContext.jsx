import { createContext, useState } from 'react'
import { TASKS } from '../data/data'
export const TaskContext = createContext()
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(TASKS)
  const [done, setDone] = useState(false)
  const handleTaskCompletion = (taskId, completed) => {
    if (completed == undefined) {
      const renderTask = tasks.filter((_, index) => index !== taskId)
      setTasks(renderTask)
    } else {
      const updatedTasks = tasks.map((task, index) => {
        if (index === taskId) {
          return { ...task, completed: !completed }
        }
        return task
      })

      setTasks(updatedTasks)
    }
  }
  function createTask(title, description) {
    if (title < 1) return
    setTasks([...tasks, { title, description, completed: false }])
  }

  return (
    <TaskContext.Provider value={{ tasks, handleTaskCompletion, createTask }}>
      {children}
    </TaskContext.Provider>
  )
}
