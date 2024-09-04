import React from 'react';

const SelectedFoods = () => {
  const foods = [
    {
      name: 'Soft drinks',
      price: 180,
      description: 'Red dhal, slow cooked overnight with ghee and fresh cream',
      img: 'https://th.bing.com/th/id/OIP.VpZNASSP44IgLG6QFMHXPwHaHa?w=165&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      name: 'Dhal curry',
      price: 180,
      description: 'Red dhal, slow cooked overnight with ghee and fresh cream',
      img: 'https://th.bing.com/th/id/OIP.VWxw_PdAPhlnce_WuTDlHQHaE8?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Soya curry',
      price: 100,
      description: 'Red dhal, slow cooked overnight with ghee and fresh cream',
      img: 'https://th.bing.com/th/id/OIP.xL0PvH-_eXGlCi1np4z0ogHaLH?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Chicken curry',
      price: 280,
      description: 'Red dhal, slow cooked overnight with ghee and fresh cream',
      img: 'https://th.bing.com/th/id/OIP.oX2-hW4tW-Sq8lOD936rigAAAA?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Rice',
      price: 180,
      description: 'Red dhal, slow cooked overnight with ghee and fresh cream',
      img: 'https://th.bing.com/th/id/R.9e5fe997f6ac3ef74764784945f71ae2?rik=kK28FAFI2KlQ3A&pid=ImgRaw&r=0',
    },
  ];

  const total = foods.reduce((acc, food) => acc + food.price, 0);

  return (
    <div className="min-h-screen relative p-6 flex flex-col items-center">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url('https://th.bing.com/th/id/OIP.RSC6kWWsj0exBlPhTDWYzAHaEK?rs=1&pid=ImgDetMain')",
          zIndex: -1,
        }}
      ></div>

      {/* Content */}
      <div className="bg-white bg-opacity-70 mt-16 mb-20 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">SELECTED FOODS</h1>

        {/* Food Items List */}
        <div className="space-y-4">
          {foods.map((food, index) => (
            <div key={index} className="bg-[#d6d6a3] rounded-md p-4 flex justify-between items-center">
              {/* Food Info */}
              <div className="flex items-center space-x-4">
                <img src={food.img} alt={food.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">
                    {food.name} <span className="text-orange-500">Rs.{food.price}.00</span>
                  </h2>
                  <p className="text-sm">{food.description}</p>
                </div>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 font-bold text-2xl">×</button>
            </div>
          ))}
        </div>

        {/* Total and Checkout */}
        <div className="flex justify-between mt-6">
          <div className='w-60'></div>
          <a href='pickup'>  <button className="bg-green-500 text-white  ml-96 font-bold py-2 px-6 rounded-lg">Next</button></a>
        </div>
      </div>
    </div>
  );
};

export default SelectedFoods;
