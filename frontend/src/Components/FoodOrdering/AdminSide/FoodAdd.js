import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons';

const FoodAdd = () => {
  const [name, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddProduct = async () => {
    const foodData = {
      name,
      description,
      price,
      category,
      quantity,
    };

    try {
      const response = await fetch('http://localhost:7050/api/food/addFood', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(foodData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Product added successfully!');
        // Clear input fields or handle success accordingly
        setProductName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setQuantity('');
      } else {
        alert('Failed to add product: ' + result.message);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }
  };

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
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={name}
              onChange={(e) => setProductName(e.target.value)}
              pattern="[A-Za-z\s]+"
              title="Product name should only contain letters and spaces"
              onKeyPress={(e) => {
                if (!/[A-Za-z\s]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              required
            />
            <label className="text-gray-700 mb-2 block">Description</label>
            <textarea
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
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
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              pattern="^\d+(\.\d{1,2})?$"
              title="Price should be a number with up to 2 decimal places"
              onKeyPress={(e) => {
                if (!/[\d.]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>

          {/* Product Category Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Category</h2>
            <label className="text-gray-700 mb-2 block">Product Category</label>
            <select
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>

          {/* Inventory Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Inventory</h2>
            <label className="text-gray-700 mb-2 block">Quantity</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              pattern="^\d+$"
              title="Quantity should be a whole number"
              onKeyPress={(e) => {
                if (!/\d/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex -mt-20 ml-80 justify-end gap-4">
            <button className="bg-red-300 text-black border h-14 border-red-800 px-6 py-2 rounded hover:bg-red-400">
              Discard Change
            </button>
            <button
              onClick={handleAddProduct}
              className="bg-blue-600 text-white h-14 px-6 py-2 rounded hover:bg-blue-700"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAdd;