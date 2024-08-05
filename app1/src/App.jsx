import { useState } from 'react'
import Home from './pages/Home/component/Home'
import About from './pages/About/component/About'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './routs/Root';
import Login from './pages/Login/component/Login';
import Profile from './pages/Profile/component/Profile';
import NotFound from './pages/NotFound/NotFound';
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
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
