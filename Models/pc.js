const { model, Schema } = require("mongoose");

const pcSchema = new Schema({
  name: String,
  sertag: String,
  assettag: String,
  vlan: String,
  ip: String,
  locId: String,
  posiId: String,
  createdAt: String,
  modifyAt: String,
});

module.exports = model("Pc", pcSchema);
