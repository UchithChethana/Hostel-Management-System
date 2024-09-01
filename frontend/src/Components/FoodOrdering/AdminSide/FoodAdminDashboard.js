import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const FoodAdminDashboard = () => {
  return (
    <div className="flex h-screen">
      

      {/* Main content area */}
      <div className="flex-1 bg-white">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-7">
          <h1 className="text-xl font-semibold text-gray-700">Welcome Back, Himaya Jayasinghe</h1>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Hamna Hakeem</span>
              <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {/* This is where you can add more components or content */}
          <div className="h-full bg-white rounded-lg shadow-inner">
            {/* Your content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodAdminDashboard;
