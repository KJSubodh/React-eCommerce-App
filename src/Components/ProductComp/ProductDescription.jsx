import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../context/CartContext';

const ProductDescription = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(err => {
                console.error("Axios Error:", err);
                setError("Failed to load product details.");
            });
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    if (error) return <div className="text-center p-10 text-red-500">{error}</div>;
    if (!product) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen py-12">

            {/* --- TOAST NOTIFICATION --- */}
            {addedToCart && (
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] animate-in fade-in slide-in-from-bottom-5 duration-300">
                    <div className="bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-amber-500/30">
                        <div className="bg-amber-500 rounded-full p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className="font-bold tracking-wide">Item added to your cart!</span>
                        <Link to="/cart" className="ml-2 text-amber-400 hover:text-amber-300 underline text-sm font-extrabold">
                            VIEW
                        </Link>
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. BACK BUTTON - Separated from the content */}
                <Link
                    to="/products"
                    className="inline-flex items-center gap-2 mb-10 bg-gray-900 text-white py-3 px-6 rounded-xl hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-amber-200 font-bold"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Products
                </Link>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Image Section */}
                    <div className="md:w-1/2 bg-gray-50 rounded-3xl p-10 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[500px] object-contain mix-blend-multiply"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">
                            {product.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            {product.title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-6 mb-10">
                            <span className="text-4xl font-black text-gray-900">${product.price}</span>
                            <div className="h-10 w-[1px] bg-gray-200"></div>
                            <div className="flex items-center">
                                <span className="text-amber-500 text-xl">★</span>
                                <span className="ml-2 font-bold text-gray-700">{product.rating?.rate}</span>
                                <span className="ml-1 text-gray-400">({product.rating?.count} reviews)</span>
                            </div>
                        </div>

                        {/* 2. ACTION BUTTON - Connected to Cart */}
                        <button
                            onClick={handleAddToCart}
                            className={`bg-gray-900 cursor-pointer text-white text-lg font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-gray-200 hover:shadow-amber-200 w-full md:w-max active:scale-95 ${addedToCart ? 'bg-green-500 hover:bg-green-600' : 'hover:bg-amber-500'
                                }`}
                        >
                            {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;