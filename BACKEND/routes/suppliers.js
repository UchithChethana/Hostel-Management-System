const router = require("express").Router();
let Supplier = require("../models/supplier");

// Add Supplier
router.route("/add").post((req, res) => {
    const { SupplierName, CompanyName, SupplierComRegNum, Email, ContactNumber, ItemCategory } = req.body;

    const newSupplier = new Supplier({
        SupplierName,
        CompanyName,
        SupplierComRegNum,
        Email,
        ContactNumber,
        ItemCategory
    });

    newSupplier.save()
        .then(() => res.json("Supplier Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get All Suppliers
router.route("/").get((req, res) => {
    Supplier.find()
        .then((suppliers) => res.json(suppliers))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update Supplier
router.route("/update/:id").put(async (req, res) => {
    let supplierId = req.params.id;
    const { SupplierName, CompanyName, SupplierComRegNum, Email, ContactNumber, ItemCategory } = req.body;

    const updateSupplier = {
        SupplierName,
        CompanyName,
        SupplierComRegNum,
        Email,
        ContactNumber,
        ItemCategory
    };

    await Supplier.findByIdAndUpdate(supplierId, updateSupplier)
        .then(() => res.status(200).send({ status: "Supplier updated" }))
        .catch((err) => res.status(500).send({ status: "Error with updating data", error: err.message }));
});

// Delete Supplier
router.route("/delete/:id").delete(async (req, res) => {
    let supplierId = req.params.id;

    await Supplier.findByIdAndDelete(supplierId)
        .then(() => res.status(200).send({ status: "Supplier deleted" }))
        .catch((err) => res.status(500).send({ status: "Error with deleting supplier", error: err.message }));
});

// Get One Supplier by ID
router.route("/get/:id").get(async (req, res) => {
    let supplierId = req.params.id;

    await Supplier.findById(supplierId)
        .then((supplier) => res.status(200).send({ status: "Supplier fetched", supplier }))
        .catch((err) => res.status(500).send({ status: "Error with getting supplier", error: err.message }));
});

module.exports = router;
