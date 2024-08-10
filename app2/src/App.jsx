import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'



function App() {
  
  const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [products, setProducts] = useState([])

  const getProduct = async()=>{
    const response = await fetch(`https://dummyjson.com/products/1`)
    const data =await response.json()
    console.log(data)
  }

  const getSearchProduct =  async()=>{
    const {data} = await axios.get(`https://dummyjson.com/products/search?q=${searchQuery}`)
        setProducts(data.products)
        console.log(data.products)
}
  
  useEffect(()=>{
    getProduct()
  },[])

  useEffect(()=>{
    getSearchProduct()
  },[searchQuery])

  return (
    <> 
    <button onClick={()=>{
      setCount(count +1)
    }} >click {count}</button>
    
    <input type="text"  value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}/>

   <button onClick={getSearchProduct}>search</button>
    { products.map((product)=>(
  
      <div className="product" key={product.id}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.thumbnail}  />
      </div>
    ))}
        
    
    
    </>
  
  )
}

export default App