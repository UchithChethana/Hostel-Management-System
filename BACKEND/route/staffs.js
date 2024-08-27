const router = require("express").Router();
let Staff = require("../models/staff");

// Add Staff
router.route("/add").post((req, res) => {
    const { FName, LName, JobPosition, Email, PhoneNumber, Age, NIC } = req.body;

    const newStaff = new Staff({
        FName,
        LName,
        JobPosition,
        Email,
        PhoneNumber,
        Age,
        NIC
    });

    newStaff.save()
        .then(() => res.json("Staff Member Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get All Staff Members
router.route("/").get((req, res) => {
    Staff.find()
        .then((staff) => res.json(staff))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update Staff Member
router.route("/update/:id").put(async (req, res) => {
    let staffId = req.params.id;
    const { FName, LName, JobPosition, Email, PhoneNumber, Age, NIC } = req.body;

    const updateStaff = {
        FName,
        LName,
        JobPosition,
        Email,
        PhoneNumber,
        Age,
        NIC
    };

    await Staff.findByIdAndUpdate(staffId, updateStaff)
        .then(() => res.status(200).send({ status: "Staff Member updated" }))
        .catch((err) => res.status(500).send({ status: "Error with updating data", error: err.message }));
});

// Delete Staff Member
router.route("/delete/:id").delete(async (req, res) => {
    let staffId = req.params.id;

    await Staff.findByIdAndDelete(staffId)
        .then(() => res.status(200).send({ status: "Staff Member deleted" }))
        .catch((err) => res.status(500).send({ status: "Error with deleting staff member", error: err.message }));
});

// Get One Staff Member by ID
router.route("/get/:id").get(async (req, res) => {
    let staffId = req.params.id;

    await Staff.findById(staffId)
        .then((staff) => res.status(200).send({ status: "Staff Member fetched", staff }))
        .catch((err) => res.status(500).send({ status: "Error with getting staff member", error: err.message }));
});

module.exports = router;
