import React, { useState } from 'react'

const TaskBox = ({ onNewTask }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const valueInput = inputValue.trim()

    if (valueInput.length <= 1) return // si el largo de lo que se escriba en el input es menor o igual a 1, entonces simplemente no se va a ejecutar nada
    onNewTask(valueInput)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Write a task'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

export default TaskBox