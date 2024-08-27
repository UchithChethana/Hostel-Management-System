import React from 'react';

const DinnerMenu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: "url('https://th.bing.com/th/id/R.c09cc81e4e1dbd86b9b01001ae8e719f?rik=iPTv8bpRV7ZD1Q&pid=ImgRaw&r=0')" }}
    >
      <div className="max-w-5xl mx-auto bg-slate-950 bg-opacity-90 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl text-white font-bold">Dinner Menu</h1>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 ">
          {/* Chicken Biryani */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.M5P3yI6QSzcItNnqOMVz4gHaLG?rs=1&pid=ImgDetMain"
            name="Chicken Biryani"
            description="Aromatic basmati rice cooked with tender chicken pieces and spices."
            price="Rs.350.00"
          />

          {/* Butter Chicken */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.473cffEmVfxLq5vfa-Q3-QHaHa?rs=1&pid=ImgDetMain"
            name="Butter Chicken"
            description="Chicken in a creamy tomato-based sauce, served with naan or rice."
            price="Rs.400.00"
          />

          {/* Paneer Tikka Masala */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.0c7d0a30f5c7a96616dbc84473b3972d?rik=MHgo8fzHmA4p7A&pid=ImgRaw&r=0"
            name="Paneer Tikka Masala"
            description="Grilled paneer cubes cooked in a rich and spicy tomato gravy."
            price="Rs.320.00"
          />

          {/* Fish Curry */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.730akhSB-557ecBgpTHiSgHaJ4?w=600&h=800&rs=1&pid=ImgDetMain"
            name="Fish Curry"
            description="Fresh fish cooked in a tangy and spicy coconut-based curry."
            price="Rs.280.00"
          />

          {/* Mutton Rogan Josh */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.32f9b4fb8026849b32871150bf72e060?rik=QeblOUrLM3ZRdA&pid=ImgRaw&r=0"
            name="Mutton Rogan Josh"
            description="Slow-cooked mutton in a rich, aromatic gravy."
            price="Rs.450.00"
          />

          {/* Vegetable Pulao */}
          <MenuItem
            imgSrc="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/garimasgautam-gmail.com/Nepalese_Veg_Pulao.jpg"
            name="Vegetable Pulao"
            description="Aromatic rice cooked with mixed vegetables and spices."
            price="Rs.200.00"
          />

          {/* Naan Bread */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.ytaWXBdfxTU0FD7-O2t9-QAAAA?rs=1&pid=ImgDetMain"
            name="Garlic Naan"
            description="Soft and fluffy naan bread topped with garlic butter."
            price="Rs.80.00"
          />

          {/* Dal Tadka */}
          <MenuItem
            imgSrc="https://tandooribitesie.com/wp-content/uploads/2021/01/Dal-Fry-Recipe-Step-By-Step-Instructions-991x1024.jpg"
            name="Dal Tadka"
            description="Yellow lentils cooked with spices and topped with ghee tempering."
            price="Rs.180.00"
          />

          {/* Tandoori Chicken */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.fny9TZSIEgUZ65bY0kZa0AAAAA?rs=1&pid=ImgDetMain"
            name="Tandoori Chicken"
            description="Spicy marinated chicken roasted in a tandoor."
            price="Rs.300.00"
          />

          {/* Prawn Curry */}
          <MenuItem
            imgSrc="https://www.realfoods.co.nz/wp-content/uploads/2018/11/Roi-Thai-Tom-Yum-Shrimp.jpg"
            name="Prawn Curry"
            description="Juicy prawns cooked in a spicy and tangy curry sauce."
            price="Rs.350.00"
          />

          {/* Masala Dosa */}
          <MenuItem
            imgSrc="https://foodiewish.com/wp-content/uploads/2020/05/Masala-Dosa-Recipe.jpg"
            name="Masala Dosa"
            description="Crispy dosa filled with spiced potato filling, served with chutneys."
            price="Rs.150.00"
          />

          {/* Baked Lasagna */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/R.4ec607d5ce0a5808dc26d80b2a1da2ec?rik=bZXR31LSCghW8w&pid=ImgRaw&r=0"
            name="Baked Lasagna"
            description="Layers of pasta, meat sauce, and cheese baked to perfection."
            price="Rs.400.00"
          />

          {/* Caesar Salad */}
          <MenuItem
            imgSrc="https://th.bing.com/th/id/OIP.w4r5rpVWHIRAdJ4u1skaIgHaLH?w=1360&h=2040&rs=1&pid=ImgDetMain"
            name="Caesar Salad"
            description="Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan."
            price="Rs.180.00"
          />
        </div>

        {/* Add to Checkout Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-black py-2 px-6 rounded-lg font-bold">Add to checkout</button>
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

export default DinnerMenu;
