const router = require("express").Router();
let Maintenance = require("../models/maintenance");

// Add Maintenance Request
router.route("/add").post((req, res) => {
    const { roomNumber, studentName, issue, urgencyLevel, dateOfSubmitted, contactNumber } = req.body;

    const newMaintenanceRequest = new Maintenance({
        roomNumber,
        studentName,
        issue,
        urgencyLevel,
        dateOfSubmitted: new Date(dateOfSubmitted),  // Store only the date part
        contactNumber
    });

    newMaintenanceRequest.save()
        .then(() => res.json("Maintenance Request Added"))
        .catch((err) => console.log(err));
});

// Get All Maintenance Requests
router.route("/").get((req, res) => {
    Maintenance.find()
        .then((maintenanceRequests) => res.json(maintenanceRequests))
        .catch((err) => console.log(err));
});

// Update Maintenance Request
router.route("/update/:id").put(async (req, res) => {
    let requestId = req.params.id;
    const { roomNumber, studentName, issue, urgencyLevel, dateOfSubmitted, contactNumber } = req.body;

    const updateMaintenanceRequest = {
        roomNumber,
        studentName,
        issue,
        urgencyLevel,
        dateOfSubmitted: new Date(dateOfSubmitted),  // Store only the date part
        contactNumber
    };

    await Maintenance.findByIdAndUpdate(requestId, updateMaintenanceRequest)
        .then(() => res.status(200).send({ status: "Request updated" }))
        .catch((err) => res.status(500).send({ status: "Error with updating data", error: err.message }));
});

// Delete Maintenance Request
router.route("/delete/:id").delete(async (req, res) => {
    let requestId = req.params.id;

    await Maintenance.findByIdAndDelete(requestId)
        .then(() => res.status(200).send({ status: "Request deleted" }))
        .catch((err) => res.status(500).send({ status: "Error with deleting request", error: err.message }));
});

// Get One Maintenance Request by ID
router.route("/get/:id").get(async (req, res) => {
    let requestId = req.params.id;

    await Maintenance.findById(requestId)
        .then((maintenanceRequest) => res.status(200).send({ status: "Request fetched", maintenanceRequest }))
        .catch((err) => res.status(500).send({ status: "Error with getting request", error: err.message }));
});

module.exports = router;
