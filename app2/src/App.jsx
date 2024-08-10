import React, { useEffect, useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(()=>{
    console.log('useEffect with searchquery')
  }, [searchQuery])

  useEffect(()=>{
    console.log('useEffect with searchquery or count')
  }, [count, searchQuery])

    useEffect(()=>{
      console.log('useEffect with count')
    }, [count])

  useEffect(()=>{
    console.log('useEffect')
  })

  return (
    <>
    <button onClick={()=>{
      setCount(count +1)
    }} >click {count}</button>
    <div>App</div>
    <input type="text"  value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>
    </>
  
  )
}

export default App