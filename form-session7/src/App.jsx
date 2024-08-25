import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword ] = useState('')
  return (
    <>

      <form action="">
        <label htmlFor="">user name </label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} /> 
        <input type="submit" value="submit" />
        <p>username is {userName} and passowrd is {userPassword}</p>
        </form>
    </>
  )
}

export default App
