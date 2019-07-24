const jwt = require("jsonwebtoken");

// check if user token is valid
module.exports = (req, res, next) => {
  try {
    const token = req.body.token;
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Auth failed"
    });
  }
};
