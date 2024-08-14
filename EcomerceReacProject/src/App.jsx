import { useState } from 'react'
import './App.css'
import Home from './pages/Home/components/Home'
import Root from './routs/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound/component/NotFound'
import Signup from './pages/Signup/component/Signup'
import Signin from './pages/Signin/component/Signin'
import Products from './pages/Products/component/Products'
import Categories from './pages/Categories/component/Categories'
import Cart from './pages/Cart/component/Cart'

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/Signin",
        element: <Signin />,
      },
      {
        path: "/Products",
        element: <Products />,
      },
      {
        path: "/Categories",
        element: <Categories />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "*",              //another way for the error 
        element: <NotFound />
      }
    ]
  },

]);



function App() {
  
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
