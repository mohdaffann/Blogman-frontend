import React, { useEffect } from 'react'
import './index.css'
import Layout from './Layout/Layout.jsx'
import { Categories, Home, Login, Signup, Posts } from './pages/PageIndex.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import authStore from './store/authStore.js'
function App() {

  const { checkAuth } = authStore();

  useEffect(() => {
    checkAuth()
  }, [])

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'posts',
          element: <Posts />
        }, {
          path: 'categories',
          element: <Categories />
        }, {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Signup />
        }
      ]
    }
  ])



  return (
    <>
      <RouterProvider router={routes} />
    </>
  )

}
export default App