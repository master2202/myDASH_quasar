const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Account = require("../models/welcome");
const Profile = require("../models/mydash");

// user registration
exports.user_signup = async (req, res, next) => {
  try {
    // check if user exist
    const user = await Account.find({ email: req.body.email });
    // if exist send message
    if (user.length >= 1) {
      res.status(409).json({ error: "Email already taken!" });
      // if not continue registration
    } else {
      // hashing password
      const hash = await bcrypt.hash(req.body.password, 10);
      // create new user (protected) db
      const account = new Account({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: hash,
        created: req.body.created
      });
      await account.save();
      //create new user (public) db
      const profile = new Profile({
        _id: account._id,
        name: req.body.name,
        lang: req.body.lang,
        online: false,
        main: "profile_1",
        profile_1: {
          name: null,
          avatar: null,
          banner: null
        },
        profile_2: {
          name: null,
          avatar: null,
          banner: null
        },
        profile_3: {
          name: null,
          avatar: null,
          banner: null
        }
      });
      await profile.save();
      // send message
      res.status(201).json({
        profile: profile,
        message: account.name + " registered successfully!"
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// user login
exports.user_signin = async (req, res, next) => {
  try {
    // check if user exist
    const user = await Account.find({ email: req.body.email });
    // if not exist send message
    if (user.length < 1) {
      console.log("user_signin: 4"),
        res.status(404).json({ error: "Email not exist!" });
      // if exist continue login
    } else {
      // compare hashed password from db with current
      const match = await bcrypt.compare(req.body.password, user[0].password);
      if (!match) {
        console.log("user_signin: 3");
        return res.status(401).json({ error: "Password is incorrect!" });
      }
      if (match) {
        // create token for user
        const token = jwt.sign(
          {
            email: user[0].email,
            id: user[0]._id,
            name: user[0].name
          },
          "secret",
          {
            expiresIn: "12h"
          }
        );
        // update status
        const status = await Profile.findById(user[0]._id);
        status.online = true;
        await status.save();
        // send data and token to client
        console.log("user_signin: 2"),
          res.status(200).json({
            message: "Auth successful",
            token: token
          });
      }
    }
  } catch (error) {
    console.log("user_signin: 1"), res.status(500).json({ error: error });
  }
};

// account Verify - must be call on [ protected ] route
exports.account_verify = async (req, res, next) => {
  if (req.userData.email !== req.body.email) {
    return res.status(401).json({ error: "Verify Failed!" });
  } else {
    try {
      // check if user exist
      const user = await Account.find({ email: req.body.email });
      // if not exist send message
      if (user.length < 1) {
        console.log("user_signin: 4"),
          res.status(404).json({ error: "Email not exist!" });
        // if exist continue login
      } else {
        // compare hashed password from db with current
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) {
          console.log("user_signin: 3");
          return res.status(401).json({ error: "Password is incorrect!" });
        }
        if (match) {
          // create token for user
          const token = jwt.sign(
            {
              email: user[0].email,
              id: user[0]._id,
              name: user[0].name
            },
            "secret",
            {
              expiresIn: "12h"
            }
          );
          // update status
          const status = await Profile.findById(user[0]._id);
          status.online = true;
          await status.save();
          // send data and token to client
          console.log("user_signin: 2"),
            res.status(200).json({
              message: "Auth successful",
              token: token
            });
        }
      }
    } catch (error) {
      console.log("user_signin: 1"), res.status(500).json({ error: error });
    }
  }
};

// account Update - must be call on [ protected ] route
exports.account_update = async (req, res, next) => {
  //
  const account = await Account.findById(req.userData.id);
  // if data not exist return
  if (!account) return res.status(404).json({ message: "Data not exist!" });
  // else next
  console.log("update:");
  console.log(req.body.update);
  // update and save database
  if (req.body.update === "password") {
    account[req.body.update] = await bcrypt.hash(req.body.data, 10);
    await account.save();
    // response from server
    res.status(200).json({
      message: "Password was changed!"
    });
  } else {
    return res.status(401).json({ error: "Only Password can be changed!" });
  }
};
