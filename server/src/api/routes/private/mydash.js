const express = require("express");
const router = express.Router();
const checkAuth = require("../../middleware/check_auth");
const setTimeout = require("../../middleware/set_timeout");
const mydashController = require("../../controllers/mydash");
const welcomeController = require("../../controllers/welcome");

// verify account
router.post(
  "/account/verify",
  setTimeout,
  checkAuth,
  welcomeController.account_verify
);
// update account password
router.post(
  "/account/update",
  setTimeout,
  checkAuth,
  welcomeController.account_update
);
// update profile data
router.post("/profile", setTimeout, checkAuth, mydashController.profile_data);
router.put(
  "/profile/update",
  setTimeout,
  checkAuth,
  mydashController.profile_update
);
router.put(
  "/connections/update",
  setTimeout,
  checkAuth,
  mydashController.connections_update
);
// get friends list
router.post("/friends", setTimeout, checkAuth, mydashController.friends_list);
// get people data
router.post("/people", setTimeout, checkAuth, mydashController.people_list);

module.exports = router;
