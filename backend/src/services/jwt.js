const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, "dluhnsvguezjdjgzgf");
};

const verifyToken = (token) => {
  return jwt.sign(token, "dluhnsvguezjdjgzgf");
};

module.exports = { createToken, verifyToken };
