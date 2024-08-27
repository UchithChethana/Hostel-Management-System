import React from 'react';

const Pickup = () => {
  return (
    <div className="min-h-screen bg-cover bg-center  bg-gradient-slide">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex max-w-4xl mt-20 mb-20 w-full bg-sky-900 shadow-lg rounded-lg overflow-hidden">
          {/* Right Side - Register Form */}
          <div className="w-1/2 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Give us your pickup information</h1>
            </div>
            <form className="space-y-6">
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Email address"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="sr-only">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Address"
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
                <label htmlFor="pickup-time" className="block text-sm font-medium text-white mb-1">Pickup Time</label>
                <input
                  id="pickup-time"
                  name="pickup-time"
                  type="time"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-black text-black focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-white">
                  Accept terms and conditions
                </label>
              </div>

              {/* Register Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register
                </button>
              </div>

              {/* Register with Google Button */}
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  <img src='' alt="Google" className="h-5 w-5 mr-2" />
                  Register with Google
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="text-center text-sm text-black-600 mt-4">
              <a href="/customerlogin" className="font-medium text-white hover:text-orange-500">
                Already have an account? Login
              </a>
            </div>
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
