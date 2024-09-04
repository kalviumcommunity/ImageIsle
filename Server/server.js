const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const route = require("./route");
const cors = require("cors");
const URI = process.env.URI;
app.use(cors());
app.use(express.json());
app.use("/", route);

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
