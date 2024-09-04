const express = require("express");
const post = require("./model");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userSchemaModel = require("./signUp");

app.use(express.json());
app.use(cors());

app.post("/post", async (req, res) => {
  const { link, user } = req.body;
  const post_up = await post.create({ link, uploaded_by: user });
  res.status(200).json(post_up);
});

app.get("/post", async (req, res) => {
  const data = await post.find();
  res.json(data);
});

app.post("/login", (req,res)=>{
    const{email,password} = req.body;
    userSchemaModel.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No user by that name")
        }
    })
})

app.post("/register", (req, res) => {
  userSchemaModel
    .create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = app;
