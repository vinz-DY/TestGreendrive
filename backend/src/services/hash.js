const argon2 = require("argon2");

const options = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashLength: 50,
};

const hash = async (password) => {
  try {
    return await argon2.hash(password, options);
  } catch (err) {
    console.error(err);
    throw new Error("Something's wrong !");
  }
};

module.exports = hash;
