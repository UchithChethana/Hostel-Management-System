import React from 'react';

const BeverageMenu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c09cc81e4e1dbd86b9b01001ae8e719f?rik=iPTv8bpRV7ZD1Q&pid=ImgRaw&r=0')" }}
    >
      <div className="max-w-5xl mx-auto bg-slate-950 bg-opacity-90 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-white font-bold">Beverage Menu</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {/* Coffee */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.af0c99b163b0a7509532d1942ea57835?rik=Hk%2bLh1ZsdUztRw&pid=ImgRaw&r=0"
            name="Coffee"
            description="Freshly brewed coffee with a rich aroma."
            price="Rs.150.00"
          />

          {/* Green Tea */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.57195f998ad570ab5b3b467f8a5b1d4d?rik=wiG48wM3uQpOvQ&pid=ImgRaw&r=0"
            name="Green Tea"
            description="Organic green tea with a hint of jasmine."
            price="Rs.120.00"
          />

          {/* Smoothie */}
          <MenuItem
            imgSrc="https://thissillygirlskitchen.com/wp-content/uploads/2024/04/Yogurt-Fruit-Smoothie-Recipe-5-610x915.jpg"
            name="Fruit Smoothie"
            description="A refreshing blend of mixed fruits and yogurt."
            price="Rs.200.00"
          />

          {/* Lemonade */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.WJcl6hHARzOK_cRNea5PWAHaKo?rs=1&pid=ImgDetMain"
            name="Lemonade"
            description="Chilled lemonade with a splash of mint."
            price="Rs.100.00"
          />

          {/* Iced Tea */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.ce0f7e3dcfebc4d023107a21a09ffaa7?rik=0fW96NZEJfUE%2bQ&pid=ImgRaw&r=0"
            name="Iced Tea"
            description="Classic iced tea with a lemon twist."
            price="Rs.130.00"
          />

          {/* Hot Chocolate */}
          <MenuItem
            imgSrc="https://caloriecontrol.org/wp-content/uploads/AdobeStock_59093507.jpeg"
            name="Hot Chocolate"
            description="Rich and creamy hot chocolate with marshmallows."
            price="Rs.180.00"
          />

          {/* Mango Lassi */}
          <MenuItem
            imgSrc="https://i.pinimg.com/736x/47/78/57/4778578ba28e636d4b7d0638177be1e2.jpg"
            name="Mango Lassi"
            description="Traditional Indian yogurt drink with mango puree."
            price="Rs.150.00"
          />

          {/* Espresso */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.sjkwtF6Q1tmhvrwu9VK8XwAAAA?rs=1&pid=ImgDetMain"
            name="Espresso"
            description="Strong and bold espresso shot."
            price="Rs.120.00"
          />

          {/* Milkshake */}
          <MenuItem
            imgSrc="https://1.bp.blogspot.com/-fBv-MzuR9NE/XVS1iCGWZXI/AAAAAAAABMw/vlx492HSodMIsCIyQCVoyDKZYCc4B69OQCLcBGAs/s1600/13.jpg"
            name="Milkshake"
            description="Creamy milkshake with vanilla ice cream."
            price="Rs.180.00"
          />

          {/* Mocha */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.VbQnLaK9D10wCmrchgpnfgHaHa?rs=1&pid=ImgDetMain"
            name="Mocha"
            description="A blend of coffee, chocolate, and steamed milk."
            price="Rs.200.00"
          />

          {/* Herbal Tea */}
          <MenuItem
            imgSrc="https://www.publicdomainpictures.net/pictures/270000/velka/herbal-tea-15369105192JG.jpg"
            name="Herbal Tea"
            description="A soothing mix of herbs and flowers."
            price="Rs.110.00"
          />

          {/* Soda */}
          <MenuItem
            imgSrc="https://i5.walmartimages.com/asr/7a3d82d0-f83c-41d7-a363-023de75d3a33_1.3ba8783a5c1fe05a2b5e5afe9f266d0f.jpeg"
            name="Soda"
            description="Chilled soda with a variety of flavors."
            price="Rs.80.00"
          />
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-black py-2 px-6 rounded-lg font-bold">Add to Checkouts</button>
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

export default BeverageMenu;
