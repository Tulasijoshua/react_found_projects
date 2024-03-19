import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Navbar from './components/Navbar'
import ShopContextProvider from './context/ShopContext'


function App() {

  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  )
}

export default App
