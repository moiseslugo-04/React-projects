import './App.css'
import { Form } from './components/Form'
import { TasksList } from './components/TasksList'
function App() {
  return (
    <div className='app'>
      <Form />
      <TasksList />
    </div>
  )
}

export default App
