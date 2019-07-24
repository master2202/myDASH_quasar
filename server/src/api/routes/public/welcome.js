const express = require("express");
const router = express.Router();
const welcomeController = require("../../controllers/welcome");
const setTimeout = require("../../middleware/set_timeout");

// public routes
router.post("/signup", setTimeout, welcomeController.user_signup);
router.post("/signin", setTimeout, welcomeController.user_signin);

module.exports = router;
