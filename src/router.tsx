import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/admin',
    element: <Admin />
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
