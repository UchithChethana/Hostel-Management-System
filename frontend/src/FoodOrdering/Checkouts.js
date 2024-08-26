import React from 'react';

const Checkouts = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-center">CHECKOUT</h1>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md bg-[#d6d6a3] text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Room Number Field */}
          <div>
            <input
              type="text"
              placeholder="Room number"
              className="w-full px-4 py-2 rounded-md bg-[#d6d6a3] text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Pickup Time Field */}
          <div>
            <input
              type="text"
              placeholder="Pickup time"
              className="w-full px-4 py-2 rounded-md bg-[#d6d6a3] text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Payment Options */}
          <div className="bg-[#d6d6a3] px-4 py-2 rounded-md text-black">
            <div className="flex items-center space-x-4">
              <span>Payment</span>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Cash
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Card
              </label>
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                Points
              </label>
            </div>
          </div>

          {/* Pay Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg"
            >
              PAY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkouts;
