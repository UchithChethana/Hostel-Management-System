import React, { useState } from 'react'; // Correct import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBox, faBoxes, faSignOutAlt, faChevronDown,faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router

const SideNavBar = () => {
  // State to manage dropdown visibility
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col h-full justify-between">
        {/* Logo with white background */}
        <div className="bg-white p-4 flex justify-center">
          <img
            src="https://th.bing.com/th/id/R.1adfe2009a78b61ba9bc5ad51202a581?rik=G6vW%2b8aSRZIdcQ&pid=ImgRaw&r=0"
            alt="SLIIT UNI Kurunegala Centre"
            className="w-full h-16 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 p-6">
          <Link to="/adminprofile">
            <Link to={'adminprofile'}><button className="flex w-full items-center text-left gap-2 px-4 py-2 bg-white rounded hover:bg-orange-400 text-black">
              <FontAwesomeIcon icon={faUserCircle} />
              Admin profile
            </button></Link>
          </Link>

          {/* Product Dropdown Button */}
          <div className="relative">
            <button
              className="flex items-center text-left gap-2 px-4 py-2 bg-white rounded hover:bg-orange-400 text-black w-full"
              onClick={toggleProductDropdown}
            >
              <FontAwesomeIcon icon={faBox} />
              Product
              <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
            </button>

            {/* Dropdown Menu */}
            {isProductDropdownOpen && (
              <div className="absolute left-0 w-full bg-white rounded shadow mt-2 z-10">
                <Link to="/productlist">
                  <Link to={'productlist'}><button className="flex items-center text-left gap-2 px-4 py-2 hover:bg-orange-400 text-black w-full">
                    <FontAwesomeIcon icon={faBox} />
                    Product List
                  </button></Link>
                </Link>
                <Link to="/foodadd">
                  <Link to={'foodadd'}><button className="flex items-center text-left gap-2 px-4 py-2 hover:bg-orange-400 text-black w-full">
                    <FontAwesomeIcon icon={faBoxes} />
                    Add product
                  </button></Link>
                </Link>
              </div>
            )}
          </div>

          <Link to="/stock">
            <button className="flex items-center w-full text-left gap-2 px-4 py-2 bg-white rounded hover:bg-orange-400 text-black">
            <FontAwesomeIcon icon={faWrench} />
              Settings
            </button>
          </Link>
        </nav>

        {/* Logout */}
        <button className="flex items-center text-left gap-2 px-4 py-2 bg-green-500 rounded hover:bg-green-600 m-6">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavBar;
