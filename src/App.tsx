import React, { useState } from 'react'
import TaskForm from './components/TaskForm.tsx'
import ListTask from './components/ListTask.tsx'
import { Button } from 'antd'

export type dataTask = {
  category: string
  task: string
  status: boolean
  details: string
  key: React.Key
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-5">
      <h4 className="flex justify-center mt-5">Creador de ToDo App</h4>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
        className="mt-10 mb-5 w-1/5"
      >
        Nueva Tarea
      </Button>
      <TaskForm visible={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ListTask setIsModalOpen={setIsModalOpen} />
    </div>
  )
}
export default App
