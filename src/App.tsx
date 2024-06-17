import React, { useState } from 'react'
import TaskForm from './components/TaskForm.tsx'
import ListTask from './components/ListTask.tsx'
import { Button } from 'antd'
import { ToastContainer } from 'react-toastify'

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
      <h4 className="flex justify-center mt-5 text-lg sm:text-2xl">
        Creador de ToDo App
      </h4>
      <div className="flex ">
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          className="mt-10 mb-5 sm:w-full w-1/5"
        >
          Nueva Tarea
        </Button>
      </div>
      <TaskForm visible={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ListTask setIsModalOpen={setIsModalOpen} />
      <ToastContainer />
    </div>
  )
}
export default App
