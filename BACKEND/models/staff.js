const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    FName: {
        type: String,
        required: true,
    },
    LName: {
        type: String,
        required: true,
    },
    JobPosition: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: Number,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    NIC: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
