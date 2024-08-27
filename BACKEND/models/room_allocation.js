const mongoose = require("mongoose");

// Define the schema
const RoomAllocationSchema = new mongoose.Schema({
    studentFirstName: {
        type: String,
        required: true,
    },
    studentLastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    studentID: {
        type: String,
        required: true,
        unique: true,
    },
    distance: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    transport: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    degreeProgramme: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    }
});

// Create the model using the schema
const RoomAllocation = mongoose.model("RoomAllocation", RoomAllocationSchema);

module.exports = RoomAllocation;
