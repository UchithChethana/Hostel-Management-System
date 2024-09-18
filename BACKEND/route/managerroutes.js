const express=require("express")


let Managermodel = require("../models/managermodel");
const Manager = require("../models/managermodel");

const router = express.Router();

/*router.post("/add_manager",async(req,res)=>{
    const data=new Manager(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
  })*/
router.route("/add_manager").post((req,res)=>{
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newAdmin = new Manager({
    username,
    email,
    password
  });

  newAdmin.save().then(()=>{
    res.json("Admin created");
  }).catch((err)=>{
        console.log(err);
        res.status(500).json({ message: "Error adding manager", error: err });
    });
});


  //MANAGER Login 
router.post("/signin",async (req, res) => {
    console.log('in-------------------------------');
    const { email, password } = req.body;
  
    try {
        console.log(email);  
      const user = await Manager.findOne({ email});
      
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
    
     // const isPasswordValid = await bcrypt.compare(password, user.password);
     const isPasswordValid1 = user.password===password;
  
      console.log('Input password:', password);
      console.log('Stored hashed password:', user.password);
      console.log('isPasswordValid:', isPasswordValid1);
      
      if (isPasswordValid1===false) { // Fixed condition
        console.log('Request body:', req.body);
        return res.status(401).json({ success: false, message: "Incorrect password" });
      
  
      }
  
      // If password is valid, send success message and user data
      res.status(200).json({ success: true, message: "Login successful", data: user });
    } catch (error) {
        console.log('Retrieved user:', user);
  
      console.error("Login error:", error);
      res.status(500).json({ success: false, message: error });
    }
  });
  module.exports = router;
