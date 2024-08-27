import React from 'react';

const BreakfirstMenu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c09cc81e4e1dbd86b9b01001ae8e719f?rik=iPTv8bpRV7ZD1Q&pid=ImgRaw&r=0')" }}
    >
      <div className="max-w-5xl mx-auto bg-slate-950 bg-opacity-90 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-white font-bold">BREAKFAST</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 ">
          {/* Dhal Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.zEwH8dM6MHspoA2W5H_wdAHaFK?w=243&h=180&c=7&r=0&o=5&pid=1.7"
            name="Dhal curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.180.00"
          />

          {/* Soya Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.VH73ydXQ7n_hBA0lLobNlAHaHH?rs=1&pid=ImgDetMain"
            name="Soya curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.100.00"
          />

          {/* Chicken Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.lkB2tV6WcqAi6eowamXXiQAAAA?rs=1&pid=ImgDetMain"
            name="Chicken curry"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.280.00"
          />

          {/* Rice */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.yU88f7e3Bng80fcGxAUOxAHaHa?rs=1&pid=ImgDetMain"
            name="Rice"
            description="Red dhal, slow cooked overnight with ghee and fresh cream"
            price="Rs.180.00"
          />

          {/* Additional Meal Items */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.20829885bccb89eafca1988db577e3a7?rik=YZVdcnSzXIUPWw&pid=ImgRaw&r=0"
            name="Idli"
            description="Steamed rice cakes served with chutney and sambar"
            price="Rs.150.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.8lPk_caLDgGI0xnmU5x64AHaHa?rs=1&pid=ImgDetMain"
            name="Poha"
            description="Flattened rice cooked with spices, peanuts, and herbs"
            price="Rs.120.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.-LaTjueyW6mzcvZu0GFbzgHaHa?rs=1&pid=ImgDetMain"
            name="noodles"
            description="Stuffed flatbread with spiced potatoes, served with curd"
            price="Rs.200.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.D9nJanpPt-UYsJ_RWEfSQAHaE8?rs=1&pid=ImgDetMain"
            name="bun"
            description="Semolina porridge cooked with vegetables and spices"
            price="Rs.130.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.df66de8e41d16b7ae8873b3323f02fb7?rik=ucFTdRmzGAFtYQ&pid=ImgRaw&r=0"
            name="Pancake"
            description="Fluffy pancakes served with syrup and butter"
            price="Rs.180.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.pSGsMWhprQFtvbQJCouU0wHaE8?rs=1&pid=ImgDetMain"
            name="Omelette"
            description="Egg omelette with tomatoes, onions, and spices"
            price="Rs.150.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.NakxJ8TblO0uRRSJkN0CnQHaDt?rs=1&pid=ImgDetMain"
            name="French Toast"
            description="Bread slices dipped in egg batter and fried"
            price="Rs.160.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.UAe9bNJgqVkrWoPkbLmdCgHaGV?rs=1&pid=ImgDetMain"
            name="Bacon and Eggs"
            description="Crispy bacon strips with scrambled eggs"
            price="Rs.200.00"
          />

          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.uihjRKIqa57EHkCDLEreBwHaE7?w=258&h=180&c=7&r=0&o=5&pid=1.7"
            name="Bread Slice"
            description="Bread slices dipped in egg batter and fried"
            price="Rs.250.00"
          />

          <MenuItem
            imgSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/poori-puri-recipe.jpg"
            name="Puri Bhaji"
            description="Fried bread served with spiced potato curry"
            price="Rs.170.00"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-6">
          <a href='selectedfoods'><button className="bg-green-500 text-black py-2 px-6 rounded-lg font-bold">Add to checkouts</button></a>
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

export default BreakfirstMenu;
