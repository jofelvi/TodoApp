import { createSlice } from '@reduxjs/toolkit'


interface User {
  id: string | null
  name?: string | null
  lastName?: string | null
  email: string | null
}

interface AuthState {
  isAuthenticated?: boolean
  user: User | null
  token: string | null
  loading?: boolean,
  error: string | null,
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
  user: {
    id: localStorage.getItem('userId') || null,
    name: localStorage.getItem('UserName') || null,
    lastName: localStorage.getItem('UserLastName') || null,
    email: localStorage.getItem('email') || null,
  } || null,
  token: localStorage.getItem('access_token') || null,
  loading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginReduces: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
      localStorage.setItem('access_token', action.payload.token)
    },
    logout: state => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      localStorage.removeItem('access_token')
    },
  },
})

export const { loginReduces, logout } = authSlice.actions
export default authSlice.reducer
