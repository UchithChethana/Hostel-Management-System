import React from 'react';

const LunchMenu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c09cc81e4e1dbd86b9b01001ae8e719f?rik=iPTv8bpRV7ZD1Q&pid=ImgRaw&r=0')" }}
    >
      <div className="max-w-5xl mx-auto bg-slate-950 bg-opacity-90 rounded-lg  shadow-md p-6 mt-20 mb-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl text-white  ml-96 font-bold">Lunch Menu</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {/* Dhal Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.zEwH8dM6MHspoA2W5H_wdAHaFK?w=243&h=180&c=7&r=0&o=5&pid=1.7"
            name="Dhal Curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.180.00"
          />

          {/* Soya Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.VH73ydXQ7n_hBA0lLobNlAHaHH?rs=1&pid=ImgDetMain"
            name="Soya Curry"
            description="Soya chunks cooked in a rich and spicy curry sauce"
            price="Rs.100.00"
          />

          {/* Chicken Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.lkB2tV6WcqAi6eowamXXiQAAAA?rs=1&pid=ImgDetMain"
            name="Chicken Curry"
            description="Chicken pieces cooked in a flavorful curry with spices"
            price="Rs.280.00"
          />

          {/* Vegetable Biryani */}
          <MenuItem
            imgSrc="https://currydelight.co.nz/wp-content/uploads/veg-briyani.png"
            name="Vegetable Biryani"
            description="Aromatic basmati rice cooked with mixed vegetables and spices"
            price="Rs.200.00"
          />

          {/* Paneer Butter Masala */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.Nu9cIv_eQQfTqFxd0iNiewHaHa?rs=1&pid=ImgDetMain"
            name="Paneer Butter Masala"
            description="Paneer cubes in a creamy tomato-based gravy"
            price="Rs.220.00"
          />

          {/* Fish Fry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.Kn4wigV0swo8pDzYeMDAvwHaFH?rs=1&pid=ImgDetMain"
            name="Fish Fry"
            description="Crispy fried fish served with lemon wedges and onions"
            price="Rs.250.00"
          />

          {/* Noodles */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.7da9d93f2f6bb6e789b36c96ea3403aa?rik=BTlLy%2bwHiwPtnA&pid=ImgRaw&r=0"
            name="Hakka Noodles"
            description="Stir-fried noodles with vegetables and sauces"
            price="Rs.150.00"
          />

          {/* Butter Naan */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.RumxPxgsUDgNjiR63xhr5AHaE_?rs=1&pid=ImgDetMain"
            name="Butter Naan"
            description="Soft and fluffy naan bread with butter"
            price="Rs.50.00"
          />

          {/* Rajma Chawal */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.gl6kSm2aZz7TQHDk8b8vhwHaE7?rs=1&pid=ImgDetMain"
            name="Rajma Chawal"
            description="Red kidney beans curry served with steamed rice"
            price="Rs.180.00"
          />

          {/* Omelette */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.b2625d00bab990f6f4c21f6f382e7b16?rik=2ud%2bYv6Tho1row&pid=ImgRaw&r=0"
            name="Omelette"
            description="Egg omelette with tomatoes, onions, and spices"
            price="Rs.150.00"
          />

          {/* French Toast */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.e7860199f619374449d8405e0132e986?rik=RX%2bDKr7azOIQ1Q&pid=ImgRaw&r=0"
            name="French Toast"
            description="Bread slices dipped in egg batter and fried"
            price="Rs.160.00"
          />

          {/* Mixed Veg Sabzi */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.f523c3362e1a1d0cc7550977b4e1f94f?rik=hEni05ddC3mySA&pid=ImgRaw&r=0"
            name="Mixed Veg Sabzi"
            description="Assorted vegetables cooked in a spiced gravy"
            price="Rs.200.00"
          />

          {/* Chapati */}
          <MenuItem
            imgSrc="https://preview.redd.it/o7bdcxiapn771.jpg?width=960&crop=smart&auto=webp&s=7f6ffa4ee2c33b184bb7c6baddfdff8eb8388e70"
            name="Chapati"
            description="Whole wheat flatbread"
            price="Rs.20.00"
          />

          {/* Puri Bhaji */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.5onBuyotl0a2v0AgSvLhvAHaFj?rs=1&pid=ImgDetMain"
            name="Puri Bhaji"
            description="Fried bread served with spiced potato curry"
            price="Rs.170.00"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-6">
          <div className='w-96'></div>
          <a href='selectedfoods'><button className="bg-green-500 ml-96 w-44 text-black py-2 px-6 rounded-lg font-bold">Select</button></a>
        </div>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ imgSrc, name, description, price }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-sky-950 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <img src={imgSrc} alt={name} className="w-16 h-16 object-cover rounded-full" />
        <div>
          <h2 className="text-lg text-white font-semibold">{name}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-white">{price}</span>
        <button className="bg-orange-400 text-white px-2 py-1 rounded">+</button>
        <span className='text-white'>1</span>
        <button className="bg-orange-400 text-white px-2 py-1 rounded">-</button>
      </div>
    </div>
  );
};

export default LunchMenu;
