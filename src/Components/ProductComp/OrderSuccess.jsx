import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderTotal, orderItems } = location.state || { orderTotal: 0, orderItems: [] };

  const orderNumber = `ORD-${Math.floor(Math.random() * 1000000)}`;

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Order Confirmed! 🎉
          </h1>
          
          <p className="text-gray-600 mb-2">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <p className="text-sm text-gray-500 mb-2">Order Number</p>
            <p className="text-xl font-bold text-gray-900 mb-4">{orderNumber}</p>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500">Order Total</p>
                <p className="text-lg font-bold text-gray-900">${orderTotal.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Status</p>
                <p className="text-lg font-bold text-green-600">Paid</p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-8">
            A confirmation email has been sent to your registered email address.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-amber-500 transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              to="/orders"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
            >
              View My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;