import axios from 'axios'

const API_URL = 'https://localhost:7290/'

const axiosInstance = axios.create({
  baseURL: API_URL,
})

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
