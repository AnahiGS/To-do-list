import { useState } from 'react'
import TaskBox from './components/TaskBox'

import './App.css'

function App () {
  const [tasks, setTasks] = useState('')

  const onAddTask = (newTask) => {
    if (tasks.includes(newTask)) {
      return
    } // si el arreglo de tareas incluye la nueva categoria, entonces no agregue la tarea
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="ToDoList">
        <h1>To Do List</h1>

        <TaskBox onNewTask={onAddTask} />
      </div>
      <h3>List of tasks to do </h3>
      <ul id='lista'>
        {tasks.map((task) => {
          return (
            <li key={task}>
              <i className='far fa-circle co' data='realizado' id='0' />
              <p className='text'>{task} </p>
              <i className='fas fa-trash de' data='eliminado' id='0' />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
