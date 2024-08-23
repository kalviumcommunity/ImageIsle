const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const post = require("./model");
const URI = process.env.URI;
app.use(cors());

app.use(express.json());
app.post("/post", async (req, res) => {
  const { link, user } = req.body;
  const post_up = await post.create({ link, uploaded_by:user });
  res.status(200).json(post_up);
});

app.get("/post", async (req, res) => {
  const data = await post.find();
  res.json(data);
});

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected");
    app.get("/", (req, res) => {
      res.send("Working");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(4050, () => {
  console.log("Wagon RUNS!!");
});
