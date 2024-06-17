import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/'

import '../tests/matchMedia.js'
import App from '../App.tsx'

describe('App', () => {
  test('renders the title', () => {
    render(<App />)
    const titleElement = screen.getByText(/Creador de ToDo App/i)
    expect(titleElement).toBeInTheDocument()
  })

  test('opens the TaskForm modal when clicking the "Nueva Tarea" button', () => {
    render(<App />)
    const newTaskButton = screen.getByText(/Nueva Tarea/i)
    fireEvent.click(newTaskButton)
    const modalTitle = screen.getByText(/Agregar Tarea Nueva/i)
    expect(modalTitle).toBeInTheDocument()
  })

  test('renders the ListTask component', () => {
    render(<App />)
    const listTaskElement = screen.getByRole('table')
    expect(listTaskElement).toBeInTheDocument()
  })
})
