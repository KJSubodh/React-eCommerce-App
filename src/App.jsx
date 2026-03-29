import { useState } from 'react'
import './App.css'

import Navbar from './Components/NavbarComp/Navbar'
import { RouterProvider } from 'react-router-dom'
import { myMap } from './Map/Map'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={myMap} />
      </CartProvider>
    </AuthProvider>
  )
}

export default App
