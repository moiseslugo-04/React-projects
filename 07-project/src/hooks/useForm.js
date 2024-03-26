import { useState } from 'react'

export const useForm = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  function inputChange({ target: { id, value } }) {
    setForm((prevForm) => ({ ...prevForm, [id]: value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    setForm({
      username: '',
      email: '',
      password: '',
    })
  }
  console.log(form)

  return { inputChange, handleSubmit, ...form }
}
