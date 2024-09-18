require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 

const Foodroutes = require('./route/Foodroutes.js')
const ItemRoutes = require("./route/itemroutes.js"); 
const ManagerRoutes = require("./route/managerroutes.js"); 

const PORT = process.env.PORT || 7050;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // Use the necessary MongoDB connection options here
});

 
//connection  create

const connection = mongoose.connection;
connection.once("open",() =>{   //open the connection
    console.log("MongoDb connection is sucess !");
})

// const StaffRouter = require("./route/staffs.js")
//const itemmodelRouter = require("./models/itemmodel.js")
//const managermodel = require("./models/managermodel.js")


// app.use("/stafff",StaffRouter);
//app.use("/itemmodel",itemmodelRouter)
//app.use("managermodel/",managermodel)
//port eka run kara ganimata

app.use("/api/food", Foodroutes);
app.use("/product",ItemRoutes);
app.use("/admin",ManagerRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and run on port Number :${PORT}`)
})




