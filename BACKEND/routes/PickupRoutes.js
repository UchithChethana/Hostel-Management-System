const express = require('express');
const router = express.Router();
const Pickup = require('../models/PickupModels');
const Food = require('../models/Foodmodel');

// Create a new pickup order
router.post('/addPickupDetails', async (req, res) => {
    try {
        const { foodItems, ...pickupData } = req.body;
        
        // Fetch food details and calculate total amount
        let totalAmount = 0;
        const processedFoodItems = await Promise.all(foodItems.map(async (item) => {
            const food = await Food.findById(item.foodId);
            if (!food) {
                throw new Error(`Food item with id ${item.foodId} not found`);
            }
            totalAmount += food.price * item.quantity;
            return {
                food: item.foodId,
                quantity: item.quantity
            };
        }));

        const pickup = new Pickup({
            ...pickupData,
            foodItems: processedFoodItems,
            totalAmount
        });

        await pickup.save();
        res.send({ success: true, message: "Pickup order created successfully" });
    } catch (error) {
        console.error('Error creating pickup order:', error);
        res.status(500).send({ success: false, message: error.message });
    }
});

module.exports = router;
