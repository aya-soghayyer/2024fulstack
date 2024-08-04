import { useState } from 'react'
import Home from './pages/Home/component/Home'
import About from './pages/About/component/About'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './routs/Root';
import Login from './pages/Login/component/Login';
import Profile from './pages/Profile/component/Profile';

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Root />,
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
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
