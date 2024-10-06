
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/Home.html");
});





mongoose
.connect("mongodb+srv://alansir101:zH7HEQuohYAAASDa@cluster0.shce2.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });

})
.catch((err) => {console.log(err)});























