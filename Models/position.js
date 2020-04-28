const { model, Schema } = require("mongoose");

const posiSchema = new Schema({
  name: String,
  floor: String,
  status: String,
});

module.exports = model("Position", posiSchema);
