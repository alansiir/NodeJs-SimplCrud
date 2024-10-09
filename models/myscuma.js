const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definie schema
const articleSchema = new Schema({
  usernameee: String,
});

//creaction modele
const Mydata = mongoose.model("Mydataa", articleSchema);

//export modele
module.exports = Mydata;


