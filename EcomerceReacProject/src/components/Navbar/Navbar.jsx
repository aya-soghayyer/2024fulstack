import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/components/Home'
import Products from "../../pages/Products/component/Products"
import Signup from "../../pages/Signup/component/Signup"
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.module.css'


function Navbar() {
  return (
    <>
    

<nav className='navbar navbar-expand-lg bg-body-tertiary '>
        <div className="collapse navbar-collapse  " id="navbarTogglerDemo01" >
            <div className=''>
            <ul className=' navbar-nav me-auto mb-2 mb-lg-0  dive ' >
                <li className='nav-item bs-info-rgb'><NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/Signin" >Signin</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/Signup" >Signup</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/Products" >Products</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/Categories" >Categories</NavLink></li>
                <li className='nav-item'><NavLink className="nav-link" to="/Cart" >Cart</NavLink></li>
            </ul>
            </div>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
    </nav>
   
    </>
  )
}

export default Navbar