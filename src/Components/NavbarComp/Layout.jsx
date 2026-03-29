import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { SearchProvider } from "../../context/SearchContext";

const Layout = () => {
  return (
    <div>
      <SearchProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SearchProvider>
    </div>
  )
}

export default Layout
