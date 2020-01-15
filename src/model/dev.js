const mongoose = require("mongoose");
const pointSchema = require("../utils/pointSchema");

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  localtion: {
    type: pointSchema,
    index: "2dsphere"
  }
});

module.exports = mongoose.model("Dev", DevSchema);
