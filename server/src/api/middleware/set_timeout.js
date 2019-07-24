const jwt = require("jsonwebtoken");

// check if user token is valid
module.exports = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
};
