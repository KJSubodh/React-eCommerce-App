import React, { useEffect, useState } from 'react';
import ProductCards from './ProductCards';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom'; // Added this import

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. ADD THIS STATE: To control the popup visibility
  const [showToast, setShowToast] = useState(false);

  const { searchQuery } = useSearch();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // 2. ADD THIS FUNCTION: To be called by the cards
  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide after 3 seconds
  };

  const filteredItems = items.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">

      {/* --- TOAST NOTIFICATION --- */}
      {showToast && (
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

      <section className="relative py-16 overflow-hidden bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Curated <span className="text-amber-500">Collections</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400">Explore our premium selection of goods</p>
        </div>
      </section>

      <section className="py-16 mx-auto px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((product) => (
                <ProductCards
                  key={product.id}
                  product={product}
                  onAdd={triggerToast} // 3. Pass the function to the card
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-xl">No products match "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;