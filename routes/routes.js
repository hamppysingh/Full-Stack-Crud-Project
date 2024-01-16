const express=require('express');
const router=express.Router();
router.use(express.json());

var connection=require("../dbconnect/dbconnect");

router.get("/",(req,res)=>{
    connection.query("select * from car",(err,data)=>{
        if(err){
            res.status(500).send("no data found!!");
        }
        else{
            console.log(data);
            res.status(200).json(data);
        }
    });
});
router.get("/update/:id",(req,res)=>{
    connection.query("select * from car where id = ?",req.params.id,(err,data)=>{
        if(err){
            res.status(500).send("no data found!!");
        }
        else{
            console.log(data);
            res.status(200).json(data);
        }
    });
});
router.post("/carinsert",(req,res)=>{
    const val=[req.body.name,req.body.color];
    const sql="insert into car(`Name`,`Color`) values(?)";
    connection.query(sql,[val],(err,data)=>{
        if(err){
            console.log("error in finding data!!")
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});
router.delete("/delete/:Id",(req,res)=>{
    connection.query("delete from car where id = ?",req.params.Id,(err,data)=>{
        if(err){
            console.log("error in finding data!!")
            res.json(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    });
});
router.put("/update/doit/:Id",(req,res)=>{
    const sql="update car set `name` = ?,`color` = ? where id = ?";
    connection.query(sql,[req.body.name,req.body.color,req.params.Id],(err,data)=>{
        if(err){
            console.log("error in finding data!!")
            res.json(err);
        }
        else{
            console.log(data);
            console.log("Executed Succesfully!!");
            res.json(data);
        }
    });
});
module.exports=router;