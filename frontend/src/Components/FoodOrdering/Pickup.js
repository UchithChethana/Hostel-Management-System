import React from 'react';

const Pickup = () => {
  return (
    <div className="min-h-screen bg-cover bg-center  bg-gradient-slide">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex max-w-4xl mt-40 mb-20 h-screen w-full bg-sky-900 shadow-lg rounded-lg overflow-hidden">
          {/* Right Side - Register Form */}
          <div className="w-1/2 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white  mb-4">Give us your pickup information</h1>
            </div>
            <form className="space-y-6 mt-20"  >
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
                />
              </div>
               {/* Student ID Field */}
               <div>
                <label htmlFor="student-id" className="sr-only">Student ID</label>
                <input
                  id="student-id"
                  name="student-id"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full  mt-6 px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Student ID"
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
                />
              </div>
              {/* Room Number Field */}
              <div>
                <label htmlFor="room-number" className="sr-only">Room Number</label>
                <input
                  id="room-number"
                  name="room-number"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Room Number"
                />
              </div>

              {/* Pickup Time Field with Label */}
              <div>
                <label htmlFor="pickup-time" className="block text-sm  mr-64 font-medium text-black mb-1">Pickup Time</label>
                <input
                  id="pickup-time"
                  name="pickup-time"
                  type="time"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
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
