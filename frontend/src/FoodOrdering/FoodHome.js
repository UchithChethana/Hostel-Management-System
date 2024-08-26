import React from 'react';

const FoodHome = () => {
  return (
    <div className="min-h-screen relative">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-lg bg-slate-100"
         //style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.RSC6kWWsj0exBlPhTDWYzAHaEK?rs=1&pid=ImgDetMain')" }}
      ></div>

      {/* Main Content Section */}
      <div className="relative z-10 p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img
              src="" // Replace with the actual path to the logo
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

        {/* Main Content */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Hello himaya!</h2>
          <p className="text-2xl font-semibold">What do you want to eat.......</p>
        </div>

        {/* Food Categories */}
        <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto">
          <a href="breakfirstmenu"><button className=" w-96 -ml-40 flex items-center justify-center border border-black py-20 rounded-md shadow-md  hover:shadow-lg" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/copy-space-italian-food-ingredients_23-2148551732.jpg')" }}>
            <span className="text-2xl font-extrabold">BREAKFAST</span>
          </button></a>
          <a href="beveragemenu"><button className="bg-white bg-no-repeat bg-cover  w-96 border-2 border-gray-200 flex items-center justify-center py-20 rounded-md shadow-md hover:shadow-lg" style={{ backgroundImage: "url('https://buffetmap.com/wp-content/uploads/2022/08/m.facebook.combuffet101-bm1658-Image-1.jpg')" }}>
            <span className="text-2xl font-extrabold">BEVERAGES</span>
          </button></a>
          <a href="lunchmenu"><button className="bg-orange-400 flex items-center justify-center py-20 -ml-40 w-96  border border-black rounded-md shadow-md hover:shadow-lg" style={{ backgroundImage: "url('https://i.pinimg.com/564x/36/8a/1c/368a1c892a4b60d5e674c309a30b552a.jpg')" }}>
            <span className="text-2xl font-extrabold text-black">LUNCH</span>
          </button></a>
          <a href="dinnermenu"><button className="bg-gray-200  bg-no-repeat bg-cover flex items-center justify-center py-20 w-96 border border-black rounded-md shadow-md hover:shadow-lg"style={{ backgroundImage: "url('https://i.pinimg.com/564x/38/b7/79/38b7798fac310200270b0313a125aa71.jpg')" }}>
            <span className="text-2xl font-extrabold">DINNER</span>
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default FoodHome;
