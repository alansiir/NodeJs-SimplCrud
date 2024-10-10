const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//definie schema
const customerSchema = new Schema({
  FirstName : String,
  LastName : String,
  Email : String,
  Telephone : String,
  Age : String,
  Country : String,
  Gender : String


});

//creaction modele
const Customer = mongoose.model("customer", customerSchema);

//export modele
module.exports = Customer;
