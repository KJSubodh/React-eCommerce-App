import React from 'react'

import logoImg from '../../../assets/hacker07.png'

import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link to="/">
        <img
          src={logoImg}
          alt="Company Logo"
          className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
        />
      </Link>

    </div>
  )
}

export default Logo