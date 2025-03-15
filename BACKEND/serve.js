const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config(); 
const Foodroutes = require('./routes/Foodroutes.js')
const pickupRoutes = require('./routes/PickupRoutes.js');

//all application runs are server

const PORT = process.env.PORT || 7050;

app.use(cors());
app.use(bodyParser.json());  

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{   //connect to the mongo
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}); 
 
//connection  create

const connection = mongoose.connection;
connection.once("open",() =>{   //open the connection
    console.log("MongoDb connection is sucess !");
})

//port eka run kara ganimata


// const StaffRouter = require("./route/staffs.js")
const itemmodelRouter = require("./models/itemmodel.js")
const managermodel = require("./models/managermodel.js")


// app.use("/stafff",StaffRouter);
app.use("/itemmodel",itemmodelRouter)
app.use("managermodel/",managermodel)
//port eka run kara ganimata

app.use("/api/food", Foodroutes)
app.use('/api/pickup', pickupRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is up and run on port Number :${PORT}`)
})







