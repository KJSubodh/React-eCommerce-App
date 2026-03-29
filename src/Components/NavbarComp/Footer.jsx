import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    
                    {/* 1. Brand Identity */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                            BRAND<span className="text-amber-500">NAME</span>
                        </h3>
                        <p className="text-sm leading-6 text-gray-500">
                            Elevating your everyday lifestyle with curated premium products. Quality, style, and speed—delivered to your door.
                        </p>
                        <div className="flex space-x-5">
                            <SocialIcon type="facebook" />
                            <SocialIcon type="instagram" />
                            <SocialIcon type="x" />
                        </div>
                    </div>

                    {/* 2. Shop Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Shop</h3>
                        <ul className="space-y-4">
                            {['New Arrivals', 'Best Sellers', 'Electronics', 'Home & Living'].map((item) => (
                                <li key={item}>
                                    <Link to="/products" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Support Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Support</h3>
                        <ul className="space-y-4">
                            <li><Link to="/contact" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Contact Us</Link></li>
                            <li><Link to="/about" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">About Us</Link></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-amber-600 transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-2">Join the Club</h3>
                        <p className="text-xs text-gray-500 mb-4">Get 10% off your first order when you subscribe.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            />
                            <button className="w-full bg-black text-white py-2.5 rounded-lg text-sm font-bold hover:bg-amber-600 transition-all active:scale-95">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400">
                        &copy; 2026 BrandName Retail. All rights reserved. Made with ✨ in Bengaluru.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="text-xs text-gray-400 hover:text-gray-900">Terms of Service</a>
                        <div className="flex gap-2 text-lg grayscale opacity-60 ml-4">
                            <span>💳</span><span>🏦</span><span>🍎</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

// Reusable Social Icon (Simplifies the main component)
const SocialIcon = ({ type }) => {
    const paths = {
        facebook: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
        instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
        x: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    }
    return (
        <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d={paths[type]} />
            </svg>
        </a>
    )
}

export default Footer