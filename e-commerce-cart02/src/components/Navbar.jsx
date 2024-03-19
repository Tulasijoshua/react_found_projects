import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='links'>
        <Link to="/" >Shop</Link>
        <Link to="/cart">
            <ShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
