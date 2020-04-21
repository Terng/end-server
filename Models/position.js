const { model, Schema } = require("mongoose");

const posiSchema = new Schema({
  name: String,
  floor: String,
  values: String
});

module.exports = model("Position", posiSchema);
