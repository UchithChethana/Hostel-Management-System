import React from 'react';

const BreakfirstMenu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/06/29/00/17/breakfirst-6372859_1280.jpg')" }}
    >
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">BREAKFAST</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {/* Dhal Curry */}
          <MenuItem
            imgSrc="dhal.png"
            name="Dhal curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.180.00"
          />

          {/* Soya Curry */}
          <MenuItem
            imgSrc="soya.png"
            name="Soya curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.100.00"
          />

          {/* Chicken Curry */}
          <MenuItem
            imgSrc="chicken.png"
            name="Chicken curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.280.00"
          />

          {/* Rice */}
          <MenuItem
            imgSrc="rice.png"
            name="Rice"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.180.00"
          />

          {/* Additional Meal Items */}
          <MenuItem
            imgSrc="idli.png"
            name="Idli"
            description="Steamed rice cakes served with chutney and sambar"
            price="Rs.150.00"
          />

          <MenuItem
            imgSrc="poha.png"
            name="Poha"
            description="Flattened rice cooked with spices, peanuts, and herbs"
            price="Rs.120.00"
          />

          <MenuItem
            imgSrc="paratha.png"
            name="Aloo Paratha"
            description="Stuffed flatbread with spiced potatoes, served with curd"
            price="Rs.200.00"
          />

          <MenuItem
            imgSrc="upma.png"
            name="Upma"
            description="Semolina porridge cooked with vegetables and spices"
            price="Rs.130.00"
          />

          <MenuItem
            imgSrc="pancake.png"
            name="Pancake"
            description="Fluffy pancakes served with syrup and butter"
            price="Rs.180.00"
          />

          <MenuItem
            imgSrc="omelette.png"
            name="Omelette"
            description="Egg omelette with tomatoes, onions, and spices"
            price="Rs.150.00"
          />

          <MenuItem
            imgSrc="toast.png"
            name="French Toast"
            description="Bread slices dipped in egg batter and fried"
            price="Rs.160.00"
          />

          <MenuItem
            imgSrc="smoothie.png"
            name="Fruit Smoothie"
            description="Blended fruit smoothie with yogurt and honey"
            price="Rs.200.00"
          />

          <MenuItem
            imgSrc="bacon.png"
            name="Bacon and Eggs"
            description="Crispy bacon strips with scrambled eggs"
            price="Rs.250.00"
          />

          <MenuItem
            imgSrc="puri.png"
            name="Puri Bhaji"
            description="Fried bread served with spiced potato curry"
            price="Rs.170.00"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-white py-2 px-6 rounded-lg">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ imgSrc, name, description, price }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <img src={imgSrc} alt={name} className="w-16 h-16 object-cover rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold">{price}</span>
        <button className="bg-orange-400 text-white px-2 py-1 rounded">+</button>
        <span>1</span>
        <button className="bg-orange-400 text-white px-2 py-1 rounded">-</button>
      </div>
    </div>
  );
};

export default BreakfirstMenu;
