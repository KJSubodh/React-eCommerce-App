import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

const Cart = () => {
    const { cart, removeFromCart, totalPrice, updateQuantity } = useCart();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    if (cart.length === 0) {
        return (
            <div className="bg-white min-h-screen py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 bg-amber-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-amber-600 transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                                    <div className="w-24 h-24 bg-gray-50 rounded-xl p-3 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <Link to={`/product/${item.id}`} className="font-bold text-gray-900 hover:text-amber-500 transition-colors line-clamp-2">
                                            {item.title}
                                        </Link>
                                        <span className="text-sm text-gray-500 capitalize mt-1 block">{item.category}</span>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        {/* Quantity Selector Group */}
                                        <div className="text-center">
                                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Quantity</p>
                                            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="px-3 py-1.5 hover:bg-amber-100 text-gray-600 transition-colors font-bold cursor-pointer disabled:opacity-30"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    −
                                                </button>

                                                <span className="w-8 text-center font-bold text-gray-900 text-sm">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="px-3 py-1.5 hover:bg-amber-100 text-gray-600 transition-colors font-bold cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        {/* Subtotal for this Item */}
                                        <div className="text-center min-w-[90px]">
                                            <p className="text-[10px] text-gray-400 uppercase font-bold mb-1 tracking-wider">Subtotal</p>
                                            <p className="text-lg font-black text-gray-900">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </p>
                                        </div>

                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 cursor-pointer transition-colors p-2 mt-4 hover:bg-red-100 rounded-full"
                                            aria-label="Remove item"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="border-t border-gray-200 pt-3 mt-3">
                                    <div className="flex justify-between text-lg font-bold text-gray-900">
                                        <span>Total</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate('/payment')}
                                className="w-full cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-3 rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-200 mb-3 active:scale-[0.98]"
                            >
                                Proceed to Checkout
                            </button>

                            <Link
                                to="/products"
                                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-amber-200 font-bold active:scale-[0.98]"
                            >
                                ← Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;