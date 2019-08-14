const jwt = require("jsonwebtoken");
const Profile = require("../models/mydash");

// GET FRIENDS DATA
exports.friends_list = async (req, res, next) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, "secret");
  const friends = await Profile.find({ _id: { $ne: decoded.id } }).select({
    profile_1: 1
  });
  console.log("friends");
  res.status(200).json({
    message: "Auth successful",
    friends: friends
  });
};

// GET PEOPLE DATA
exports.people_list = async (req, res, next) => {
  console.log("PERSON: " + req.body.person);
  const people = await Profile.find({ name_search: req.body.person }).select({
    name: 1,
    profile_1: 1
  });
  console.log("people");
  res.status(200).json({
    message: "Auth successful",
    people: people
  });
};

// GET PROFILE DATA
exports.profile_data = async (req, res, next) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, "secret");
  const profile = await Profile.findById(decoded.id).select({
    name: 1,
    main: 1,
    profile_1: 1,
    profile_2: 1,
    profile_3: 1
  });
  console.log("profile");
  res.status(200).json({
    message: "Auth successful",
    profile: profile
  });
};

// UPDATE PROFILE
exports.profile_update = async (req, res, next) => {
  //
  const profile = await Profile.findById(req.userData.id);
  // if data not exist return
  if (!profile) return res.status(404).json({ message: "Data not exist!" });
  // else next
  console.log("update:");
  console.log(req.body.update);
  // update and save database
  profile[req.body.update[0]][req.body.update[1]] = req.body.data;
  const result = await profile.save();
  // response from server
  res.status(200).json({
    message: "Data was updated!",
    profile: result
  });
};
