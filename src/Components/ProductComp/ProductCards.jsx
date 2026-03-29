import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'; // Adjust path as needed

const ProductCards = ({ product, onAdd }) => { // 1. Receive onAdd prop
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
        onAdd();
    };

    return (
        <Link to={`/product/${product.id}`} className="block">
            <div className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container with subtle background */}
                <div className="relative h-84 w-full mb-6 bg-gray-50 rounded-xl overflow-hidden p-6 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="bg-amber-100 text-amber-700 text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md">
                            {product.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                    <h2 className="text-gray-900 font-bold text-lg leading-tight mb-2 line-clamp-1 group-hover:text-amber-600 transition-colors">
                        {product.title}
                    </h2>
                </div>

                {/* Bottom Action Section */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase font-semibold tracking-tighter">Price</span>
                        <span className="text-2xl font-black text-gray-900">${product.price}</span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-gray-900 cursor-pointer text-white p-3 rounded-xl hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-gray-200 hover:shadow-amber-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCards;