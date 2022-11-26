import { useState } from 'react'
import TaskBox from './components/TaskBox'

import './App.css'

function App () {
  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <input type='text' placeholder='Write a task' onChange={}/>
      <div>
        <TaskBox/>
      </div>
    </div>
  )
}

export default App
