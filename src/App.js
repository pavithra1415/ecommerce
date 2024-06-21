import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import AddProduct from './AddProduct/AddProduct'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/addproduct" element={<AddProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}
