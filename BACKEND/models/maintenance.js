const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
    },
    studentName: {
        type: String,
        required: true,
    },
    issue: {
        type: String,
        required: true,
    },
    urgencyLevel: {
        type: String,
        required: true,
    },
    dateOfSubmitted: {
        type: Date,
        required: true,
        get: (v) => v.toISOString().split('T')[0],  // Format date as YYYY-MM-DD
        set: (v) => new Date(v.toISOString().split('T')[0]),  // Store only the date part
    },
    contactNumber: {
        type: Number,
        required: true,
    },
}, { toJSON: { getters: true }, toObject: { getters: true } });

const Maintenance = mongoose.model("Maintenance", MaintenanceSchema);

module.exports = Maintenance;
