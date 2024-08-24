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


  const getProducts = async()=>{
    try {
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products?delay=5000`)
      setProducts(data.products) 
      setLoader(false)

    }catch(e)
    {
      console.log("catch error")
      console.log(e.message)
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
    {Products.map(product=>
      <div className="product" key={product.id} >
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt="" />
      </div>
    )}
    </>
  )
}

export default App
