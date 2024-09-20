// EditProduct.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useParams and useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons';

const EditProduct = () => {
  const { productId } = useParams(); // Get 'id' from URL
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    // imageUrl: '' // Assuming you have an image URL field
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:7050/api/food/foodShow/${productId}`);
        const result = await response.json();
        if (result.success) {
          setProduct(result.data);
        } else {
          setError(result.message || 'Failed to fetch product.');
        }
      } catch (error) {
        setError('Error fetching product: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:7050/api/food/foodUpdate/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });
      const result = await response.json();
      if (result.success) {
        alert('Product updated successfully!');
        navigate('/adminlayout/productlist'); // Redirect to product list after update
      } else {
        alert('Failed to update product: ' + result.message);
      }
    } catch (error) {
      alert('Error updating product: ' + error.message);
    }
  };

  const handleDiscard = () => {
    navigate('/adminlayout/productlist'); // Redirect without saving
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="flex h-screen">
      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-8">
          <h1 className="text-xl font-semibold text-gray-700">Edit Product: {product.name}</h1>
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
            <label className="text-gray-700 mb-2 block">Product Name</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
            <label className="text-gray-700 mb-2 block">Description</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={product.description}
              onChange={(e) => setProduct({ ...product, description: e.target.value })}
            />
          </div>

          {/* Product Media Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Media</h2>
            <label className="text-gray-700 mb-2 block">Product Photo</label>
            <div className="flex items-center justify-center p-4 bg-gray-50 border rounded cursor-pointer">
              <FontAwesomeIcon icon={faCamera} className="text-gray-600 text-3xl" />
              {/* You can implement image upload functionality here */}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Pricing</h2>
            <label className="text-gray-700 mb-2 block">Price</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={product.price}
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
            />
          </div>

          {/* Product Category Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Product Category</h2>
            <label className="text-gray-700 mb-2 block">Category</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={product.category}
              onChange={(e) => setProduct({ ...product, category: e.target.value })}
            />
          </div>

          {/* Inventory Section */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Inventory</h2>
            <label className="text-gray-700 mb-2 block">Quantity</label>
            <input
              type="text"
              className="p-2 border rounded bg-gray-50 w-full mb-4"
              value={product.quantity}
              onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
            />
          </div>

          {/* Action Buttons */}
          <div className="col-span-2 flex justify-end gap-4">
            <button
              onClick={handleDiscard}
              className="bg-red-300 text-black border h-14 border-red-800 px-6 py-2 rounded hover:bg-red-400"
            >
              Discard Change
            </button>
            <button
              onClick={handleUpdateProduct}
              className="bg-blue-600 text-white h-14 px-6 py-2 rounded hover:bg-blue-700"
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;