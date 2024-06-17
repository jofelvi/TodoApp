import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/'
import { useStore, StoreState, dataTask } from '../Store/useStore'
import ListTask from '../components/ListTask.tsx'
import '../tests/matchMedia.js'

jest.mock('../Store/useStore', () => ({
  useStore: jest.fn(),
}))

const mockData: dataTask[] = [
  {
    category: 'Category 1',
    task: 'Task 1',
    status: true,
    details: 'Details 1',
    key: '1',
  },
  {
    category: 'Category 2',
    task: 'Task 2',
    status: false,
    details: 'Details 2',
    key: '2',
  },
]

describe('ListTask Component', () => {
  beforeEach(() => {
    ;(useStore as unknown as jest.Mock).mockReturnValue({
      data: mockData,
      setEditingTask: jest.fn(),
      addTask: jest.fn(),
      updateTask: jest.fn(),
    } as StoreState)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders table with correct columns and data', () => {
    render(<ListTask setIsModalOpen={jest.fn()} />)

    expect(screen.getByText('Categoría')).toBeInTheDocument()
    expect(screen.getByText('Nombre Tarea')).toBeInTheDocument()
    expect(screen.getByText('Estado')).toBeInTheDocument()
    expect(screen.getByText('Detalle')).toBeInTheDocument()
    expect(screen.getByText('Acciones')).toBeInTheDocument()

    expect(screen.getByText('Category 1')).toBeInTheDocument()
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Activo')).toBeInTheDocument()
    expect(screen.getByText('Details 1')).toBeInTheDocument()
    expect(screen.getByText('Category 2')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
    expect(screen.getByText('Inactivo')).toBeInTheDocument()
    expect(screen.getByText('Details 2')).toBeInTheDocument()
  })
})

describe('ListTask Component', () => {
  it('renders table header with correct columns', () => {
    render(<ListTask setIsModalOpen={jest.fn()} />)

    expect(screen.getByText('Categoría')).toBeInTheDocument()
    expect(screen.getByText('Nombre Tarea')).toBeInTheDocument()
    expect(screen.getByText('Estado')).toBeInTheDocument()
    expect(screen.getByText('Detalle')).toBeInTheDocument()
    expect(screen.getByText('Acciones')).toBeInTheDocument()
  })
})

describe('ListTask Component', () => {
  it('calls setIsModalOpen when edit button is clicked', () => {
    const setIsModalOpenMock = jest.fn()

    jest.mock('../Store/useStore.ts', () => ({
      useStore: jest.fn(() => ({
        data: mockData,
        setEditingTask: jest.fn(),
      })),
    }))

    render(<ListTask setIsModalOpen={setIsModalOpenMock} />)

    const editButtons = screen.getAllByText('Editar')
    expect(editButtons.length).toBeGreaterThan(0)

    const closestButton = editButtons[0].closest('button')
    expect(closestButton).not.toBeNull()

    if (closestButton) {
      fireEvent.click(closestButton)
    }
    expect(setIsModalOpenMock).toHaveBeenCalledWith(true)
  })
})
