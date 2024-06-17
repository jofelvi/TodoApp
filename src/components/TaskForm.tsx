import { Input, Modal, Select, Button, Switch } from 'antd'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useStore } from '../Store/useStore.ts'
import { toast, ToastContainer } from 'react-toastify'

type taskFormProps = {
  visible: boolean
  setIsModalOpen: (visible: boolean) => void
}

type FormData = {
  category: string
  task: string
  status: boolean
  details: string
  key: React.Key
}

const TaskSchemaYup: yup.ObjectSchema<FormData> = yup.object({
  category: yup.string().required('La categoría es requerida'),
  task: yup.string().required('El nombre es requerido'),
  status: yup.boolean().default(true),
  details: yup.string().required('El Detalle de la tarea es requerido'),
  key: yup
    .string()
    .transform((_value, originalValue) => {
      if (originalValue === undefined) {
        const timestamp = Date.now()
        const uniqueId = Math.random().toString(36).substring(7)
        return `${timestamp}-${uniqueId}`
      }
      return originalValue
    })
    .default(''),
})

const TaskForm = ({ visible, setIsModalOpen }: taskFormProps) => {
  const { editingTask, addTask, updateTask, setEditingTask } = useStore()

  const defaultValues = {
    category: '',
    task: '',
    status: true,
    details: '',
    key: '',
  }

  const methodsForm = useForm<FormData>({
    resolver: yupResolver(TaskSchemaYup),
    defaultValues: editingTask ? editingTask : defaultValues,
  })

  useEffect(() => {
    if (editingTask) {
      methodsForm.reset(editingTask)
    }
  }, [editingTask, methodsForm])

  const SaveChanges = (formData: FormData) => {
    formData.key = `${formData.task}${formData.details}`
    if (editingTask) {
      updateTask(formData)
      setEditingTask(undefined)
      toast.success('Tarea editada exitosamente')
    } else {
      toast.success('Tarea agregada exitosamente')
      addTask(formData)
    }
    setIsModalOpen(false)
    methodsForm.reset(defaultValues)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setEditingTask(undefined)
    methodsForm.reset(defaultValues)
  }

  return (
    <Modal
      title={editingTask ? 'Editar Tarea' : 'Agregar Tarea Nueva'}
      open={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={methodsForm.handleSubmit(SaveChanges)}
        >
          {editingTask ? 'Guardar Cambios' : 'Agregar'}
        </Button>,
      ]}
    >
      <FormProvider {...methodsForm}>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="task" className="mb-2 font-medium">
              Nombre tarea
            </label>
            <Controller
              name="task"
              control={methodsForm.control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    id="task"
                    {...field}
                    className="border rounded px-3 py-2"
                    value={field.value || ''}
                  />
                  {fieldState.error && (
                    <span className="text-red-500 mt-1">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="details" className="mb-2 font-medium">
              Detalle
            </label>
            <Controller
              name="details"
              control={methodsForm.control}
              render={({ field, fieldState }) => (
                <>
                  <Input
                    id="details"
                    {...field}
                    className="border rounded px-3 py-2"
                    value={field.value || ''}
                  />
                  {fieldState.error && (
                    <span className="text-red-500 mt-1">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="category" className="mb-2 font-medium">
              Categoría
            </label>
            <Controller
              name="category"
              control={methodsForm.control}
              render={({ field, fieldState }) => (
                <>
                  <Select
                    {...field}
                    id="category"
                    placeholder="Categoría"
                    className="w-full"
                    onChange={field.onChange}
                    value={field.value || undefined}
                  >
                    <Select.Option key={'cat1'} value="cat1">
                      cat1
                    </Select.Option>
                    <Select.Option key={'cat2'} value="cat2">
                      cat2
                    </Select.Option>
                    <Select.Option key={'cat3'} value="cat3">
                      cat3
                    </Select.Option>
                  </Select>
                  {fieldState.error && (
                    <span className="text-red-500 mt-1">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="status" className="mb-2 font-medium mr-2">
              Estado
            </label>
            <Controller
              name="status"
              control={methodsForm.control}
              render={({ field }) => (
                <Switch
                  disabled={!editingTask}
                  {...field}
                  id="status"
                  checked={field.value}
                />
              )}
            />
          </div>

          <Controller
            name="key"
            control={methodsForm.control}
            render={({ field }) => <Input {...field} type="hidden" />}
          />
        </form>
      </FormProvider>
      <ToastContainer />
    </Modal>
  )
}

export default TaskForm
