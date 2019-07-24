const mongoose = require("mongoose");

// db model for dashboard user
const profile = mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  lang: { type: String, required: true },
  online: { type: Boolean, required: true },
  main: { type: String, required: true },
  profile_1: {
    name: { type: String },
    avatar: { type: String },
    banner: { type: String }
  },
  profile_2: {
    name: { type: String },
    avatar: { type: String },
    banner: { type: String }
  },
  profile_3: {
    name: { type: String },
    avatar: { type: String },
    banner: { type: String }
  }
});

module.exports = mongoose.model("Profile", profile);
