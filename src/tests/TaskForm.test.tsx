import '@testing-library/jest-dom/'
import '../tests/matchMedia.js'
import TaskForm from '../components/TaskForm.tsx'
import { render } from '@testing-library/react'

jest.mock('../Store/useStore.ts', () => ({
  useStore: jest.fn(() => ({
    editingTask: undefined,
    addTask: jest.fn(),
    updateTask: jest.fn(),
    setEditingTask: jest.fn(),
  })),
}))

describe('TaskForm Component', () => {
  test('renders task form correctly when visible', () => {
    const setIsModalOpen = jest.fn()
    const { getByLabelText, getByText } = render(
      <TaskForm visible={true} setIsModalOpen={setIsModalOpen} />
    )
    expect(getByLabelText('Nombre tarea')).toBeInTheDocument()
    expect(getByLabelText('Detalle')).toBeInTheDocument()
    expect(getByLabelText('Categoría')).toBeInTheDocument()
    expect(getByText('Cancelar')).toBeInTheDocument()
    expect(getByText('Agregar')).toBeInTheDocument()
  })
})

describe('TaskForm Component', () => {
  test('renders form with initial values', () => {
    const setIsModalOpen = jest.fn()
    const { getByLabelText } = render(
      <TaskForm visible={true} setIsModalOpen={setIsModalOpen} />
    )
    expect(getByLabelText('Nombre tarea')).toBeInTheDocument()
    expect(getByLabelText('Nombre tarea')).toHaveValue('')
    expect(getByLabelText('Detalle')).toBeInTheDocument()
    expect(getByLabelText('Detalle')).toHaveValue('')
    expect(getByLabelText('Categoría')).toBeInTheDocument()
    expect(getByLabelText('Categoría')).toHaveValue('')
  })
})

/*
describe('TaskForm Component', () => {
  test('submits form and calls setIsModalOpen(false)', () => {
    const setIsModalOpen = jest.fn();
    const { getByLabelText, getByText } = render(
      <TaskForm visible={true} setIsModalOpen={setIsModalOpen} />
    );

    // Simular cambios en los campos del formulario
    fireEvent.change(getByLabelText('Nombre tarea'), {
      target: { value: 'Nueva Tarea' },
    });
    fireEvent.change(getByLabelText('Detalle'), {
      target: { value: 'Detalles de la tarea' },
    });
    fireEvent.change(getByLabelText('Categoría'), {
      target: { value: 'cat1' },
    });

    // Actuar sobre el formulario para guardar cambios
    fireEvent.click(getByText('Agregar'));

    // Verificar que setIsModalOpen se llama con false
    expect(setIsModalOpen).toHaveBeenCalledWith(false);
  });
});*/
