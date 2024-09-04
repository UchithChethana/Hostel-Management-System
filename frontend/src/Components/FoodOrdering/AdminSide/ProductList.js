import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faEye,faUserCircle, faBox, faBoxes, faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  return (
    <div className="flex h-screen">
      

      {/* Main content area */}
      <div className="flex-1 bg-gray-100 p-8">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-7 mb-6">
          <h1 className="text-xl font-semibold text-gray-700">Product List</h1>
          <div className="flex items-center gap-4">
         
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Hamna Hakeem</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Product List Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-gray-600">#</th>
                <th className="border px-4 py-2 text-left text-gray-600">Image</th>
                <th className="border px-4 py-2 text-left text-gray-600">SKU</th>
                <th className="border px-4 py-2 text-left text-gray-600">Name</th>
                <th className="border px-4 py-2 text-left text-gray-600">Category</th>
                <th className="border px-4 py-2 text-left text-gray-600">Price</th>
                <th className="border px-4 py-2 text-left text-gray-600">Stock</th>
                <th className="border px-4 py-2 text-left text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">
                  <img src="image_url" alt="Product" className="h-10 w-10 object-cover" />
                </td>
                <td className="border px-4 py-2">1002003638</td>
                <td className="border px-4 py-2">Darwin Bed</td>
                <td className="border px-4 py-2">Furniture/Bed</td>
                <td className="border px-4 py-2">Rs. 20000</td>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button className="text-blue-500">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-red-500">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button className="text-gray-500">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">
                  <img src="image_url" alt="Product" className="h-10 w-10 object-cover" />
                </td>
                <td className="border px-4 py-2">1002003639</td>
                <td className="border px-4 py-2">Beverly Bed</td>
                <td className="border px-4 py-2">Furniture/Bed</td>
                <td className="border px-4 py-2">Rs. 27000</td>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2 flex gap-2">
                  <button className="text-blue-500">
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="text-red-500">
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button className="text-gray-500">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
