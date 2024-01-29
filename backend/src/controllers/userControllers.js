// Import access to database tables
const tables = require("../tables");
const { hash, verify } = require("../services/hash");
const { createToken } = require("../services/jwt");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.status(200).json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.read(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body

  try {
    // Insert the user into the database
    const hashPassword = await hash(req.body.password);
    const userId = await tables.user.create(req.body.mail, hashPassword);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ userId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const log = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.mail);
    if (user) {
      const check = await verify(req.body.password, user.password);
      if (check) {
        delete user.password;
        const profil = await tables.profil.readByAuth(user.id);
        res
          .cookie("auth", createToken(user), { httpOnly: true })
          .status(200)
          .json({
            connected: { id: user.id, mail: user.mail, role: user.role },
            profil: profil[0] ? { ...profil[0] } : false,
          });
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  log,
  // destroy,
};
