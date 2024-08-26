import React from 'react';

const FoodHome = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url('')" }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img
            src="" // Replace with actual path to logo
            alt="SLIIT UNI"
            className="h-12 mr-4"
          />
          <h1 className="text-3xl font-bold">HOSTEL</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">IT22047842 Fernando.M.R.K.K</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Logout</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit Profile</button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <nav className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-900">Rooms</button>
          <button className="text-gray-500 hover:text-gray-900">Inventory</button>
          <button className="text-gray-500 hover:text-gray-900 font-bold border-b-2 border-orange-500">Food</button>
          <button className="text-gray-500 hover:text-gray-900">Cart</button>
          <button className="text-gray-500 hover:text-gray-900">Payment</button>
          <button className="text-gray-500 hover:text-gray-900">Staff</button>
          <button className="text-gray-500 hover:text-gray-900">Suppliers</button>
          <button className="text-gray-500 hover:text-gray-900">Feedback</button>
          <button className="text-gray-500 hover:text-gray-900">Reports</button>
          <button className="text-gray-500 hover:text-gray-900">Maintenance</button>
        </nav>
      </div>

      {/* Main Content Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold">Hello himaya!</h2>
        <p className="text-gray-600">What do you want to eat.......</p>
      </div>

      {/* Food Categories */}
      <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
        <a href='breakfirstmenu'><button className="bg-blue-200 w-96 -ml-64 flex items-center justify-center py-20 rounded-md shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold">BREAKFAST</span>
        </button></a>
        <a href='beveragemenu'><button className="bg-white w-96  border-2 border-gray-200 flex items-center justify-center py-20 rounded-md shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold">BEVERAGES</span>
        </button></a>
        <a href='lunchmenu'><button className="bg-orange-400 flex items-center justify-center py-20  -ml-64 w-96 rounded-md shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold text-white">LUNCH</span>
        </button></a>
        <a href='dinnermenu'><button className="bg-gray-200 flex items-center justify-center py-20  w-96 rounded-md shadow-md hover:shadow-lg">
          <span className="text-2xl font-bold">DINNER</span>
        </button></a>
      </div>
    </div>
  );
};

export default FoodHome;
