import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleEdit = (productid) => {
    navigate(`/adminlayout/editproduct/${productid}`); // Navigate to EditProduct with product ID
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
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Hamna Hakeem</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
            </div>
          </div>
        </header>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
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
              {products.map((product, index) => (
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
