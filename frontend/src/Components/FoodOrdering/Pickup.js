import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Pickup = () => {
  const location = useLocation();
  const { selectedFoods } = location.state || { selectedFoods: {} };
  
  const [formData, setFormData] = useState({
    username: '',
    studentId: '',
    email: '',
    roomNumber: '',
    floorNumber: '',
    pickupTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodItems = Object.entries(selectedFoods).map(([foodId, quantity]) => ({
        foodId,
        quantity
      }));

      const dataToSend = {
        ...formData,
        foodItems,
        totalAmount: calculateTotalAmount()
      };

      const response = await fetch('http://localhost:7050/api/pickup/addPickupDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (result.success) {
        alert('Pickup information added successfully!');
        // Clear input fields
        setFormData({
          username: '',
          studentId: '',
          email: '',
          roomNumber: '',
          floorNumber: '',
          pickupTime: '',
        });
      } else {
        alert('Failed to add pickup information: ' + result.message);
      }
    } catch (error) {
      console.error('Error adding pickup information:', error);
      alert('An error occurred while adding the pickup information.');
    }
  };

  const calculateTotalAmount = () => {
    // You'll need to fetch food prices from the server or pass them from SelectedFoods
    // For now, we'll use a placeholder calculation
    return Object.values(selectedFoods).reduce((total, quantity) => total + quantity, 0) * 10; // Assuming each item costs 10
  };

  return (
    <div className="min-h-screen bg-cover bg-center  bg-gradient-slide">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex max-w-4xl mt-40 mb-20 h-screen w-full bg-sky-900 shadow-lg rounded-lg overflow-hidden">
          {/* Right Side - Register Form */}
          <div className="w-1/2 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white  mb-4">Give us your pickup information</h1>
            </div>
            <form className="space-y-6 mt-20" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Username"
                  pattern="[A-Za-z]+"
                  title="Username should only contain letters"
                  onKeyPress={(e) => {
                    if (!/[A-Za-z]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
               {/* Student ID Field */}
               <div>
                <label htmlFor="studentId" className="sr-only">Student ID</label>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Student ID"
                  pattern="IT[0-9]{8}"
                  maxLength="10"
                  title="Student ID should start with 'IT' followed by 8 numbers"
                  onKeyPress={(e) => {
                    const value = e.target.value;
                    if (value.length < 2) {
                      if (!/[IT]/i.test(e.key)) {
                        e.preventDefault();
                      }
                    } else if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={handleChange}
                  value={formData.studentId}
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative mt-6 block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Email address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  onKeyPress={(e) => {
                    const value = e.target.value;
                    if (!value.includes('@') && e.key === '@') {
                      return;
                    }
                    if (value.includes('@') && !/[a-z0-9._%+-@]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              {/* Room Number Field */}
              <div>
                <label htmlFor="roomNumber" className="sr-only">Room Number</label>
                <select
                  id="roomNumber"
                  name="roomNumber"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  onChange={handleChange}
                  value={formData.roomNumber}
                >
                  <option value="">Select Room Number</option>
                  <option value="101">Room 101</option>
                  <option value="102">Room 102</option>
                  <option value="103">Room 103</option>
                  <option value="104">Room 104</option>
                  <option value="105">Room 105</option>
                  <option value="201">Room 201</option>
                  <option value="202">Room 202</option>
                  <option value="203">Room 203</option>
                  <option value="204">Room 204</option>
                  <option value="205">Room 205</option>
                </select>
              </div>

              {/* Floor Number Field */}
              <div>
                <label htmlFor="floorNumber" className="sr-only">Floor Number</label>
                <select
                  id="floorNumber"
                  name="floorNumber"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  onChange={handleChange}
                  value={formData.floorNumber}
                >
                  <option value="">Select Floor Number</option>
                  <option value="1">Floor 1</option>
                  <option value="2">Floor 2</option>
                  <option value="3">Floor 3</option>
                  <option value="4">Floor 4</option>
                  <option value="5">Floor 5</option>
                </select>
              </div>

              {/* Pickup Time Field with Label */}
              <div>
                <label htmlFor="pickupTime" className="block text-sm  mr-64 font-medium text-black mb-1">Pickup Time</label>
                <input
                  id="pickupTime"
                  name="pickupTime"
                  type="time"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  onChange={handleChange}
                  value={formData.pickupTime}
                />
              </div>

             

              {/* Register Button */}
              <div>
                <button
                  type="submit"
                  className="w-40 flex justify-center py-2 px-4 border border-transparent ml-40 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-orange-500 focus:outline-none mt-14 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >Add to cart
                </button>
              </div>

              
            </form>

          
          </div>

          {/* Left Side - Image */}
          <div className="w-1/2">
            <img src='https://th.bing.com/th/id/OIP.XpQSjOinXftnGy56z84ulgHaQC?rs=1&pid=ImgDetMain' alt="Register" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pickup;