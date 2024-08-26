import React from 'react';

const SelectedFoods = () => {
  const foods = [
    { name: 'Soft drinks', price: 180, description: 'red dhal,slow cooked overnight with ghee and fresh cream', img: 'soft-drinks.png' },
    { name: 'Dhal curry', price: 180, description: 'red dhal,slow cooked overnight with ghee and fresh cream', img: 'dhal-curry.png' },
    { name: 'Soya curry', price: 100, description: 'red dhal,slow cooked overnight with ghee and fresh cream', img: 'soya-curry.png' },
    { name: 'Chicken curry', price: 280, description: 'red dhal,slow cooked overnight with ghee and fresh cream', img: 'chicken-curry.png' },
    { name: 'Rice', price: 180, description: 'red dhal,slow cooked overnight with ghee and fresh cream', img: 'rice.png' },
  ];

  const total = foods.reduce((acc, food) => acc + food.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">CART</h1>

      {/* Food Items List */}
      <div className="w-full max-w-2xl space-y-4">
        {foods.map((food, index) => (
          <div key={index} className="bg-[#d6d6a3] rounded-md p-4 flex justify-between items-center">
            {/* Food Info */}
            <div className="flex items-center space-x-4">
              <img src={food.img} alt={food.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="text-lg font-semibold">{food.name} <span className="text-orange-500">Rs.{food.price}.00</span></h2>
                <p className="text-sm">{food.description}</p>
              </div>
            </div>
            {/* Remove Button */}
            <button className="text-red-500 font-bold text-2xl">×</button>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="w-full max-w-2xl flex justify-between mt-6">
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg">Total {total}</button>
        <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg">Checkout</button>
      </div>
    </div>
  );
};

export default SelectedFoods;
