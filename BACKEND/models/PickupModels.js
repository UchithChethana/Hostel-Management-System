const mongoose = require("mongoose");

const pickupSchema = mongoose.Schema({
    username: { type: String, required: true },
    studentId: { type: String, required: true, match: /^IT[0-9]{8}$/ },
    email: { type: String, required: true, match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
    roomNumber: { type: String, required: true },
    floorNumber: { type: String, required: true },
    pickupTime: { type: String, required: true },
    foodItems: [{ 
        food: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
        quantity: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending', enum: ['Pending', 'Ready', 'Picked Up', 'Cancelled'] }
}, {
    timestamps: true
});

const Pickup = mongoose.model("Pickup", pickupSchema);

module.exports = Pickup;
