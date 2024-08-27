const router = require("express").Router();
const RoomAllocation = require("../models/room_allocation");

// Add Room Allocation
router.route("/add").post((req, res) => {
    const {
        studentFirstName,
        studentLastName,
        email,
        phone,
        address,
        studentID,
        distance,
        time,
        transport,
        payment,
        degreeProgramme,
        academicYear
    } = req.body;

    const newRoomAllocation = new RoomAllocation({
        studentFirstName,
        studentLastName,
        email,
        phone,
        address,
        studentID,
        distance,
        time,
        transport,
        payment,
        degreeProgramme,
        academicYear
    });

    newRoomAllocation.save()
        .then(() => res.json("Room Allocation Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get All Room Allocations
router.route("/").get((req, res) => {
    RoomAllocation.find()
        .then((roomAllocations) => res.json(roomAllocations))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update Room Allocation
router.route("/update/:id").put((req, res) => {
    const { id } = req.params;
    const {
        studentFirstName,
        studentLastName,
        email,
        phone,
        address,
        studentID,
        distance,
        time,
        transport,
        payment,
        degreeProgramme,
        academicYear
    } = req.body;

    RoomAllocation.findByIdAndUpdate(id, {
        studentFirstName,
        studentLastName,
        email,
        phone,
        address,
        studentID,
        distance,
        time,
        transport,
        payment,
        degreeProgramme,
        academicYear
    }, { new: true })
        .then((updatedRoomAllocation) => res.json(updatedRoomAllocation))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Delete Room Allocation
router.route("/delete/:id").delete((req, res) => {
    const { id } = req.params;

    RoomAllocation.findByIdAndDelete(id)
        .then(() => res.json("Room Allocation Deleted"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get One Room Allocation by ID
router.route("/get/:id").get((req, res) => {
    const { id } = req.params;

    RoomAllocation.findById(id)
        .then((roomAllocation) => res.json(roomAllocation))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
