import { useState } from 'react'
import './App.css'
import Tasks from './components/tarks'
import TaskForm from './components/task-form'
import { useTasksStore } from './components/store'
function App() {
  const { newTasks, completedTasks } = useTasksStore((state)=>state)

  return (
    <div className="App">
      <div>
      <h2>My todo list</h2>
      <TaskForm />
      </div>
      <div className="card">
        <h3>New</h3>
        <Tasks tasks={newTasks} />
      </div>
      <div className="card">
      <h3>Completed</h3>

        <Tasks tasks={completedTasks} />
      </div>
    </div>
  )
}

export default App
