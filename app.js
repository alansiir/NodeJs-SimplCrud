
const express = require("express");
const app = express();
const port = 3000;

// const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/Home.html");
});


app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});


// mongoose.connect("Liiiiiiiiiiiiiiiiiiiiiiiiiiiiiiink")
// .then(() => {})
// .catch((err) => {console.log(err)});























