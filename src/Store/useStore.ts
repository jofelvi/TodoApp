import { create } from 'zustand'

export type dataTask = {
  category: string
  task: string
  status: boolean
  details: string
  key: React.Key
}

export type StoreState = {
  data: dataTask[]
  editingTask?: dataTask
  addTask: (task: dataTask) => void
  updateTask: (task: dataTask) => void
  setEditingTask: (task: dataTask | undefined) => void
}

const store = create<StoreState>(set => ({
  data: [],
  editingTask: undefined,
  addTask: task => set(state => ({ data: [...state.data, task] })),
  updateTask: updatedTask =>
    set(state => ({
      data: state.data.map(task =>
        task.key === updatedTask.key ? updatedTask : task
      ),
    })),
  setEditingTask: task => set({ editingTask: task }),
}))

export const useStore = store
