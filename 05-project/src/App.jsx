import './App.css'
import { Form } from './components/Form'
import { Tasks } from './components/Tasks'
function App() {
  return (
    <div className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <Form />
        <Tasks />
      </div>
    </div>
  )
}

export default App
