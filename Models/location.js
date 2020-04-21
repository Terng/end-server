const { model, Schema } = require("mongoose");

const locSchema = new Schema({
  country: String,
  zipcode: String
});

module.exports = model("Location", locSchema);
