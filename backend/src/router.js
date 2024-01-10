const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Import userControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const validateUser = require("./validators/validateUser");

// Route to get a list of items
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/user/:id", userControllers.read);

// Route to add a new item
router.post("/user", validateUser, userControllers.add);

/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const profilControllers = require("./controllers/profilControllers");
const validateProfil = require("./validators/validateProfil");

// Route to get a list of items
router.get("/profil", profilControllers.browse);

// Route to get a specific item by ID
router.get("/profil/:id", profilControllers.read);

// Route to add a new item
router.post("/profil", validateProfil, profilControllers.add);

/* ************************************************************************* */

/* ************************************************************************* */

/* ************************************************************************* */

/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
