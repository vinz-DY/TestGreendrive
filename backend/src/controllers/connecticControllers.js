// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all connectics from the database
    const connectics = await tables.connectic.readAll();

    // Respond with the connectics in JSON format
    res.json(connectics);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific connectic from the database based on the provided ID
    const connectic = await tables.connectic.read(req.params.id);

    // If the connectic is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the connectic in JSON format
    if (connectic == null) {
      res.sendStatus(404);
    } else {
      res.json(connectic);
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
  // Extract the connectic data from the request body
  const connectic = req.body;

  try {
    // Insert the connectic into the database
    const insertId = await tables.connectic.create(connectic);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted connectic
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
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
  // destroy,
};
