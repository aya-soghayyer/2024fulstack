import './App.css'

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // const mystyle= 
  //   {color:'teal',
  //     background:'tan'
  //   }

  let [count, setCount] = useState(0); 
  let changeCounter = () => {
    setCount(count + 1);
  }
  return (
    <>
    <button onClick={changeCounter}>click {count}</button>

    <Navbar count='2' age='30' />

    <Navbar count='20'>
    <div className="div">
        <h1>second counter</h1>
        <p>this is second coutner</p>
      </div>
    </Navbar>

    <Navbar>
      <div className="div">
        <h1>third counter</h1>
        <p>this is third coutner</p>
      </div>
    </Navbar>
    {/* <div >
      <p> do not leave</p>
    </div>
      <h1>Hello world</h1>
      <p>my name is aya</p>
      <Footer /> */}
    </>

  )
}

export default App
