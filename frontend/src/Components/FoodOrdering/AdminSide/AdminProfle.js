import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const AdminProfile = () => {
  return (
    <div className="flex h-screen">
      

      {/* Main content area */}
      <div className="flex-1 bg-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-8">
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back, Binushi Himaya</h1>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            <div className="flex items-center gap-2">
              <img src="path_to_profile_image" alt="Profile" className="h-8 w-8 rounded-full" />
              <span className="text-gray-700 font-medium">Binushi Himaya</span>
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          <div className="bg-gray-200 p-8 rounded-lg shadow-inner">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600 text-3xl mr-4" />
              <h2 className="text-xl font-semibold text-gray-700">Binushi Himaya</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* First name */}
              <div className="flex flex-col">
                <input
                  type="text"
                   className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="First Name"
                  
                />
              </div>


              {/* Last name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Last Name"
                  
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <input
                  type="email"
                 className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Email Address"
                  
                />
              </div>

              {/* Phone number */}
              <div className="flex flex-col">
                <input
                  type="text"
                  className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Phone number"
                  
                />
              </div>

              {/* NIC/Passport number */}
              <div className="flex flex-col col-span-2">
                <input
                  type="text"
                  className="appearance-none rounded-md relative block w-3/5 mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="NIC/Passport number"
                  
                />
              </div>

              {/* Update Button */}
              <div className="col-span-2 flex justify-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
