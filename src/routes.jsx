import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <h1>Register Page</h1>,
  },
  {
    path: '/login',
    element: <h1>Login Page</h1>,
  },
  {
    path: '/logout',
    element: <h1>Logging out</h1>,
  },
  {
    path: '/dashboard',
    element: <h1>Dashboard</h1>,
  },
])

export default routes
