import { StoreState } from '../Store/useStore'

export const useMockStore = (
  initialState: Partial<StoreState> = {}
): StoreState => ({
  data: [],
  editingTask: undefined,
  addTask: jest.fn(),
  updateTask: jest.fn(),
  setEditingTask: jest.fn(),
  ...initialState,
})
