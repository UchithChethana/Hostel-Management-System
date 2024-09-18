const router=require("express").Router();


const { get } = require("http");
let itemmodel = require("../models/itemmodel");
const { route } = require("./Foodroutes");
//const { route } = require("./managerroutes");

/*router.route("/item").get(async(req,res)=> {
    const data=await itemmodel.find({});
    res.json({success:true,data:data});
});*/

router.route("/").get((req,res)=>{
    itemmodel.find().then((items)=>{
        res.json(items)
    }).catch((err)=>{
        console.log(err)
    })
})

/*router.post("/item_create",async(req,res)=>{
    const data=new itemmodel(req.body)
    await data.save()
    res.send({success:true,message:"data created successfuly"})
})*/

router.route("/item_create").post((req, res) => {
    const productname = req.body.productname;
    const description = req.body.description;
    const price = Number(req.body.price); // as 'price' should be a number
    const dis = Number(req.body.dis);
    const sku = req.body.sku;
    const quantity = Number(req.body.quantity);
    const photo = req.body.photo;
    const p_catogry= req.body.p_catogry;
    const p_tags = req.body.p_tags;


    const newItem = new itemmodel({
        productname,
        description,
        price,
        dis,
        sku,
        quantity,
        photo,
        p_catogry,
        p_tags
    });

    newItem.save()
        .then(() => {
            res.json("Item added");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ message: "Error adding item", error: err });
        });
});


/*router.put("/item_update",async(req,res)=>{
    const {id,...rest}=req.body
    const data=await itemmodel.updateOne({_id:id},rest)
    res.send({success:true,message:"updated successfuly",data:data})
})*/

router.route("/update/:id").put(async(req,res)=>{
    let ItemId = req.params.id;
    const{productname,description,price,dis,sku,quantity,photo,p_catogry,p_tags} = req.body;

    const updateItem = {
        productname,
        description,
        price,
        dis,
        sku,
        quantity,
        photo,
        p_catogry,
        p_tags
    }

    const update = await itemmodel.findByIdAndUpdate(ItemId,updateItem).then(()=>{
        res.status(200).send({status: "Item updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})


/*router.delete("/item_delete/:id",async(req,res)=>{
const id=req.params.id
const data=await itemmodel.deleteOne({_id:id})
res.send({success:true,message:"deleted successfully",data:data})
})*/

router.route("/delete/:id").delete(async(req,res)=>{
    let ItemId = req.params.id;

    await itemmodel.findByIdAndDelete(ItemId).then(()=>{
        res.status(200).send({status: "Item deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete item", error: err.message});
    })
})




router.get("/item_count",async(req,res)=>{
    try{
        const users=await itemmodel.find({});

        return res.status(200).json({
            count:users.length,
            data:users
        })

    }catch(err){
            console.log(err.message);
            res.json({success:true,message:"Order count successfully",data:data})
    }

})

router.get("/item_order/:id", async (req, res) => {
    const id = req.params.id;
 
    try {
        const order = await itemmodel.findById(id);

        if (!order) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        res.send({ success: true, message: "User fetched successfully", data: order });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
    }
});
 
module.exports = router;