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

/* *******************terminal****************************************************** */

const terminalControllers = require("./controllers/terminalControllers");

router.get("/terminals", terminalControllers.browse);
router.get("/terminals/:id", terminalControllers.read);

/* ***************************Profil********************************************** */
const profilControllers = require("./controllers/profilControllers");

router.get("/profils", profilControllers.browse);
router.get("/profils/:id", profilControllers.read);

/* ***************************CAR********************************************** */
const carControllers = require("./controllers/carControllers");

router.get("/cars", carControllers.browse);
router.get("/cars/:id", carControllers.read);

/* ************************************************************************* */

/* ************************************************************************* */

module.exports = router;
