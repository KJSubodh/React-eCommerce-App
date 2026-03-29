import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ isMobile, closeMenu }) => {
  // Define classes based on whether it's mobile or not
  const containerStyles = isMobile 
    ? "flex flex-col gap-6 text-lg font-semibold" 
    : "flex gap-10";

  return (
    <div className={containerStyles}>
      <Link onClick={closeMenu} to="/" className="hover:text-amber-600 transition-colors">Home</Link>
      <Link onClick={closeMenu} to="/about" className="hover:text-amber-600 transition-colors">About Us</Link>
      <Link onClick={closeMenu} to="/contact" className="hover:text-amber-600 transition-colors">Contact Us</Link>
      <Link onClick={closeMenu} to="/services" className="hover:text-amber-600 transition-colors">Services</Link>
      <Link onClick={closeMenu} to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
    </div>
  )
}

export default Menu