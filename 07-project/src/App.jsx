import './App.css'
import { Counter } from './components/Counter'
import { Form } from './components/Form'
import { UseCallback } from './components/UseCallback'
import { UseMemo } from './components/UseMemo'
import { User } from './components/User'

function App() {
  return (
    <>
      <h1>App Hooks</h1>
      <hr />
      <Counter />
      <User />
      <Form />
      <UseMemo />
      <UseCallback />
    </>
  )
}

export default App
