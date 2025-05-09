const express = require("express");
const post = require("./model");
const mongoose = require("mongoose");
const app = express();
const nodemailer = require("nodemailer");
const env=require("dotenv").config()
const cors = require("cors");
const userSchemaModel = require("./signUp");

app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
    },
});

app.post("/post", async (req, res) => {
    const { link, user } = req.body;
    const post_up = await post.create({ link, uploaded_by: user });
    res.status(200).json(post_up);
});

app.get("/post", async (req, res) => {
    const data = await post.find();
    res.json(data);
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    userSchemaModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({...user,mess:"Success"})
                } else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No user by that name")
            }
        })
})

app.post("/register", (req, res) => {
    const { name, email, password,photo } = req.body;
    console.log(req.body)
    userSchemaModel.create({ name, email, password,photo })
        .then((newUser) => {
            console.log(newUser)
            const mailOptions = {
                from: "imageisle@outlook.com",
                to: newUser.email,
                subject: "Welcome to ImageIsle",
                text: `Hey, ${newUser.name} glad to have you on board with us! `,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                    return res.json({ message: "User registered, but failed to send email", user: newUser });
                } else {
                    console.log("Email sent:", info.response);
                    res.json({ message: "User registered and email sent successfully", user: newUser });
                }
            });
        })
        .catch((err) => res.json({ error: err.message }));
});


app.get("/upload", async (req, res) => {
    try {
        const data = await post.find(); 
        if (!data) {
            return res.status(404).json({ message: 'Post not found' });
        } 
        res.status(200).json({ message: 'successful', data: data }); 
        console.log(data);
    } catch (er) { 
        res.status(500).json({ message: 'Server Error', error: er.message });
    }
});

app.put("/updateProfile", async (req, res) => {
    const { userId, name, email } = req.body;
    
    if (!userId || (!name && !email)) {
      return res.status(400).json({ message: "Invalid request. Missing fields." });
    }
    
    try {
      // Update the user's information
      const updatedUser = await userSchemaModel.findOneAndUpdate(
        {email:email}, // Find the user by their ID
        { $set: { name, email } }, // Update the name and email
        { new: true } // Return the updated document
      );
    
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
    
      res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating profile", error: error.message });
    }
  });  

module.exports = app;
