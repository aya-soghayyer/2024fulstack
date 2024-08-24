import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Loader from './components/Loader'

function App() {
  // console.log(import.meta.env.VITE_API_URL)
  const [Products, setProducts]= useState([])
  const [loader, setLoader] = useState(true)
  const [error , setError] = useState("")


  const getProducts = async()=>{
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?delay=2000`)
      setProducts(data.products) 
    }catch(e)
    {
      console.log("catch error")
      console.log(e.message)
      setError("error to load data")
    }
    finally{
      setLoader(false)
    }
  }
 
  
  useEffect(()=>{
    getProducts()
  }, [])

  if (loader){
    return <Loader />
  }
  return (
    <>
    {error??<p>{error}</p>}
    {(Products.length>0)?Products.map(product=>
      <div className="product" key={product.id} >
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="" />
      </div>
    ):<p>empty product</p>}
    </>
  )
}

export default App
