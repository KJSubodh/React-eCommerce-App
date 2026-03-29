import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './pages/Logo'
import Menu from './pages/Menu'
import { useSearch } from '../../context/SearchContext'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext' // Import useCart
import { auth } from '/src/firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { user } = useAuth();
  const { cart } = useCart(); // Get cart from context
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false); // State for hover card

  // Calculate total items in cart
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  // Generate a placeholder PFP based on name/email
  const pfpUrl = user?.photoURL || `https://ui-avatars.com/api/?name=${user?.displayName || user?.email}&background=f59e0b&color=fff`;

  return (
    <nav className="relative">
      <div className="sticky top-0 z-50 h-[90px] w-full flex items-center px-6 md:px-10 
      bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm gap-4">

        {/* LEFT: Logo */}
        <div className="flex-shrink-0 hover:scale-105 transition-transform cursor-pointer">
          <Logo />
        </div>

        {/* CENTER: Search Bar */}
        <div className="hidden lg:flex flex-1 justify-center px-8">
          <div className="relative w-full max-w-xl group">
            <input
              type="text"
              placeholder="Search Items"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border border-transparent px-4 py-2.5 rounded-full text-sm outline-none focus:bg-white focus:ring-2 focus:ring-amber-400 transition-all"
            />
          </div>
        </div>

        {/* RIGHT: Menu + Cart + Auth */}
        <div className="flex items-center gap-6 ml-auto">
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium whitespace-nowrap">
            <Menu />
          </div>

          {/* Cart Icon - Desktop */}
          <Link to="/cart" className="relative group">
            <div className="relative">
              <svg 
                className="w-6 h-6 text-gray-700 group-hover:text-amber-500 transition-colors cursor-pointer" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              
              {/* Cart Badge */}
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {user ? (
              <div
                className="relative"
                onMouseEnter={() => setShowCard(true)}
                onMouseLeave={() => setShowCard(false)}
              >
                {/* Trigger Area */}
                <div className="flex items-center gap-3 cursor-pointer p-1 rounded-full hover:bg-gray-50 transition-colors">
                  <img
                    src={pfpUrl}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-amber-400 object-cover shadow-sm"
                  />
                  <div className="hidden xl:block">
                    <p className="text-sm font-bold text-gray-800 leading-tight">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">Member</p>
                  </div>
                </div>

                {/* Account Card (Hover Dropdown) */}
                {showCard && (
                  <div className="absolute right-0 top-full pt-2 w-64 animate-in fade-in zoom-in-95 duration-200 z-[60]">
                    <div className="bg-white rounded-2xl shadow-2xl border border-amber-50 overflow-hidden">
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-4 text-white">
                        <p className="font-bold truncate">{user.displayName || 'Welcome!'}</p>
                        <p className="text-xs opacity-90 truncate">{user.email}</p>
                      </div>

                      {/* Card Links */}
                      <div className="p-2">
                        <Link to="/profile" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg transition-colors">
                          👤 My Profile
                        </Link>
                        <Link to="/orders" className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-lg transition-colors">
                          📦 My Orders
                        </Link>
                        <hr className="my-2 border-gray-100" />
                        <button
                          onClick={handleLogout}
                          className="w-full flex cursor-pointer items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-semibold"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="h-11 px-5 flex items-center bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md">
                  Login
                </Link>
                <Link to="/register" className="h-11 px-5 flex items-center bg-amber-500 text-white text-sm font-semibold rounded-xl hover:bg-amber-600 transition-all shadow-md">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden text-amber-600 bg-amber-50 p-2 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl leading-none">{isOpen ? '✕' : '☰'}</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white border-b border-amber-100 p-6 flex flex-col gap-4 shadow-xl z-40">
          {user && (
            <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl mb-2">
              <img src={pfpUrl} alt="PFP" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              <div>
                <p className="font-bold text-gray-800">{user.displayName || 'User'}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          )}
          
          {/* Cart Link in Mobile Menu */}
          <Link 
            to="/cart" 
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-amber-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-medium text-gray-700">My Cart</span>
            </div>
            {cartItemCount > 0 && (
              <span className="bg-amber-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[24px] text-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          
          <Menu isMobile={true} closeMenu={() => setIsOpen(false)} />
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            {user ? (
              <button onClick={handleLogout} className="w-full cursor-pointer py-3 bg-red-500 text-white font-bold rounded-xl">Logout</button>
            ) : (
              <>
                <Link to="/login" className="w-full py-3 text-center bg-blue-600 text-white rounded-xl font-bold">Login</Link>
                <Link to="/register" className="w-full py-3 text-center bg-amber-500 text-white rounded-xl font-bold">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar