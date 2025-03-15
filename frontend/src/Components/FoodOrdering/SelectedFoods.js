import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SelectedFoods = () => {
  const location = useLocation();
  const { selectedFoods: initialSelectedFoods } = location.state || { selectedFoods: {} };
  const [foodDetails, setFoodDetails] = useState([]);
  const [selectedFoods, setSelectedFoods] = useState(initialSelectedFoods);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const response = await fetch('http://localhost:7050/api/food/foodShow');
        const result = await response.json();
        if (result.success) {
          setFoodDetails(result.data);
        } else {
          setError(result.message || 'Failed to fetch food details.');
        }
      } catch (error) {
        setError('Error fetching food details: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodDetails();
  }, []);

  const handleRemove = (foodId) => {
    const updatedSelectedFoods = { ...selectedFoods };
    delete updatedSelectedFoods[foodId];
    setSelectedFoods(updatedSelectedFoods);
  };

  const selectedItems = foodDetails.filter(food => selectedFoods[food._id]);
  const total = selectedItems.reduce((acc, food) => {
    return acc + (food.price * selectedFoods[food._id]);
  }, 0);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
  }

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
      <div className="bg-white bg-opacity-70 mt-36 mb-20 rounded-lg shadow-lg p-6 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">SELECTED FOODS</h1>

        {/* Food Items List */}
        <div className="space-y-4">
          {selectedItems.map((food) => (
            <div key={food._id} className="bg-[#d6d6a3] rounded-md p-4 flex justify-between items-center">
              {/* Food Info */}
              <div className="flex items-center space-x-4">
                <img src={food.imageUrl || 'https://via.placeholder.com/150'} alt={food.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <h2 className="text-lg font-semibold">
                    {food.name} <span className="text-orange-500">Rs.{food.price}.00</span>
                  </h2>
                  <p className="text-sm">Count: {selectedFoods[food._id]}</p>
                </div>
              </div>
              {/* Remove Button */}
              <button className="text-red-500 font-bold text-2xl" onClick={() => handleRemove(food._id)}>×</button>
            </div>
          ))}
        </div>

        {/* Total and Checkout */}
        <div className="flex justify-between mt-6">
          <div className='w-60'>Subtotal: Rs.{total}.00</div>
          <a href='pickup'>
            <button className="bg-green-500 text-white ml-96 font-bold py-2 px-6 rounded-lg">Next</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectedFoods;