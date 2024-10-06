import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faChevronDown, faFilePdf, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({ filename: 'product-list.pdf' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:7050/api/food/foodShow');
        const result = await response.json();
        if (result.success) {
          setProducts(result.data);
        } else {
          console.error('Failed to fetch products:', result.message);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, products, searchTerm]);

  const filterProducts = () => {
    let filtered = products;
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  };

  const handleEdit = (productid) => {
    navigate(`/adminlayout/editproduct/${productid}`);
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`http://localhost:7050/api/food/foodDelete/${productId}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.success) {
          alert('Product deleted successfully!');
          setProducts(products.filter(product => product._id !== productId));
        } else {
          alert('Failed to delete product: ' + result.message);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('An error occurred while deleting the product.');
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gray-100 p-8">
        <header className="flex justify-between items-center bg-white shadow px-6 py-7 mb-6">
          <h1 className="text-xl font-semibold text-gray-700">Product List</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => toPDF()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
              Generate PDF
            </button>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Hamna Hakeem</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Search and filter section */}
        <div className="mb-6 flex items-center gap-4">
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Beverages">Beverages</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
            </div>
          </div>
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search by food name"
              className="w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div ref={targetRef} className="overflow-x-auto bg-white rounded-lg shadow">
          <h1 className="text-2xl font-bold text-center py-4 text-gray-800">Hostel Management System (Food Ordering System)</h1>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-gray-600">#</th>
                <th className="border px-4 py-2 text-left text-gray-600">Name</th>
                <th className="border px-4 py-2 text-left text-gray-600">Category</th>
                <th className="border px-4 py-2 text-left text-gray-600">Price</th>
                <th className="border px-4 py-2 text-left text-gray-600">Stock</th>
                <th className="border px-4 py-2 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product, index) => (
                <tr key={product._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">Rs. {product.price}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button className="text-blue-500" onClick={() => handleEdit(product._id)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500" onClick={() => handleDelete(product._id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <button className="text-gray-500">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;