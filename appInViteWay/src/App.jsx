
// import Navbar from './Navbar/Navbar';
// import Footer from './Footer/Footer';
// import { useState } from 'react';

import { useState } from "react";



const products = [
  { 
    id: 1,
    namee: "Product 1",
    desc: "this prod 1", 
    thumbnail:'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
    },
  { 
    id: 2,
    namee: 'Product 2',
    desc: "this prod 2", 
    thumbnail:"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
   },
  { 
    id: 3,
    namee: 'Product 3',
    desc: "this prod 3", 
    thumbnail:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
  },

  
];

function App() {
 
  const [products, setProducts] = useState([
    { 
      id: 1,
      namee: "Product 1",
      desc: "this prod 1", 
      thumbnail:'https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png'
      },
    { 
      id: 2,
      namee: 'Product 2',
      desc: "this prod 2", 
      thumbnail:"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
     },
    { 
      id: 3,
      namee: 'Product 3',
      desc: "this prod 3", 
      thumbnail:'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png'
    },
  
    
  ]);
  

  const addProduct = ()=> {
    setProducts([...products,
      { id: 4,
      namee: 'Product 4',
      desc: "this prod 4", 
      thumbnail:"https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
  }
  ]);
  }
  const [userName, setUserName] = ('')
  const handelChange = (e)=>{
    setUserName(e.target.value)
  }

  const reset = ()=> {
    setUserName('')
  }

  return (

    <>
    <input type="text" id="na" name="user name" onChange={handelChange} value={userName}/>
    <button onClick={reset}>reset input </button>

    {
      products.map(product => 
        <div  key={product.id} className="producttt">
        <h2>{product.namee}</h2>
        <img src={product.thumbnail} alt="error" />
      </div>
      )
    }

    <button  onClick={addProduct}>add new product </button>

    
    </>

  )
}

export default App
