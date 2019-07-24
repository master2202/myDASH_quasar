const express = require("express");
const router = express.Router();
const checkAuth = require("../../middleware/check_auth");
const setTimeout = require("../../middleware/set_timeout");
const mydashController = require("../../controllers/mydash");
const welcomeController = require("../../controllers/welcome");

// protected routes
router.post(
  "/account/verify",
  setTimeout,
  checkAuth,
  welcomeController.account_verify
);
router.post(
  "/account/update",
  setTimeout,
  checkAuth,
  welcomeController.account_update
);
//
router.post("/profile", setTimeout, checkAuth, mydashController.profile_data);
router.put(
  "/profile/update",
  setTimeout,
  checkAuth,
  mydashController.profile_update
);

router.post("/friends", setTimeout, checkAuth, mydashController.friends_list);
// router.post("/", checkAuth, mydashController.friends_list);
//router.put("/clock/update/:id", checkAuth, ClockController.update_clock);

module.exports = router;
