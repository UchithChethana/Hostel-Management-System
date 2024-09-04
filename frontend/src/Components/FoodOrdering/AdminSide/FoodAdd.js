import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons';

const FoodAdd = () => {

  return (
    <div className="flex h-screen">
      

      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-8">
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back, Binushi</h1>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Binushi</span>
              
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 grid grid-cols-2 gap-4">
          {/* Information Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Information</h2>
            <label className="text-gray-700 mb-2 block">Product name</label>
            <input type="text" className="p-2 border rounded bg-gray-50 w-full mb-4" />
            <label className="text-gray-700 mb-2 block">Description</label>
            <input type="text" className="p-2 border rounded bg-gray-50 w-full mb-4" />
          </div>

          {/* Product Media Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product media</h2>
            <label className="text-gray-700 mb-2 block">Product photo</label>
            <div className="flex items-center justify-center p-4 bg-gray-50 border rounded cursor-pointer">
              <FontAwesomeIcon icon={faCamera} className="text-gray-600 text-3xl" />
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Pricing</h2>
            <label className="text-gray-700 mb-2 block">Price</label>
            <input type="text" className="p-2 border rounded bg-gray-50 w-full mb-4" />
          </div>

          {/* Product Category Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Category</h2>
            <label className="text-gray-700 mb-2 block">Product Category</label>
            <input type="text" className="p-2 border rounded bg-gray-50 w-full mb-4" />
          </div>

          {/* Inventory Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Inventory</h2>
            <label className="text-gray-700 mb-2 block">Quantity</label>
            <input type="text" className="p-2 border rounded bg-gray-50 w-full mb-4" />
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex -mt-20 ml-80 justify-end gap-4">
            <button className="bg-red-300 text-black border h-14 border-red-800 px-6 py-2 rounded hover:bg-red-400">
              Discard Change
            </button>
            <button className="bg-blue-600 text-white h-14 px-6 py-2 rounded hover:bg-blue-700">
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAdd;
