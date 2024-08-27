const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({
    SupplierName: {
        type: String,
        required: true,
    },
    CompanyName: {
        type: String,
        required: true,
    },
    SupplierComRegNum: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: Number,
        required: true,
    },
    ItemCategory: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Supplier = mongoose.model("Supplier", SupplierSchema);

module.exports = Supplier;
