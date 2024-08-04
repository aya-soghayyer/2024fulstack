import { useState } from 'react'
import Home from './pages/Home/component/Home'
import About from './pages/About/component/About'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/test",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>About</div>
  },
  {
    path: "/",
    element: <div>Home</div>
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
