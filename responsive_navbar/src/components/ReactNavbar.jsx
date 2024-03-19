import React, {useState} from 'react'
import './reactNavbar.css'

const ReactNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="Navbar">
        <span className='nav-logo'>DevLHB</span>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="services">Services</a>
            <a href="contact">Contact</a>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className={`nav-toggle ${isOpen && "open"}`}>
            <div className="bar"></div>
        </div>
    </div>
  )
}

export default ReactNavbar
