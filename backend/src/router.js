const express = require("express");
const multer = require("multer");

const router = express.Router();
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "public/assets/images");
  },
  filename(req, file, callback) {
    const arrayFile = file.originalname.split(".");
    const extension = arrayFile.pop();
    callback(null, `${arrayFile[0]}_${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage,
});

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
const validateLogin = require("./validators/validateLogin");
const checkCredentials = require("./middleware/checkCredentials");

// Route to get a list of items
/*
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/user/:id", userControllers.read);
*/

// Route to add a new item

router.post("/login", validateLogin, userControllers.log);
router.post("/logout", userControllers.logout);
router.post("/users", validateUser, userControllers.add);
router.get("/users", userControllers.browse);

/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const profilControllers = require("./controllers/profilControllers");
const validateProfil = require("./validators/validateProfil");

// Route to get a list of items

// Route to add a new item
router.post(
  "/profils",
  upload.single("image"),
  validateProfil,
  checkCredentials,
  profilControllers.add
);

/* ************************************************************************* */
/* *******************terminal****************************************************** */

const terminalControllers = require("./controllers/terminalControllers");

router.get("/terminals", terminalControllers.browse);
router.get("/terminals/:id", terminalControllers.read);
router.put("/terminals/:id", terminalControllers.edit);
router.delete("/terminals/:id", terminalControllers.destroy);

/* ***************************Profil********************************************** */

router.get("/profils", checkCredentials, profilControllers.browse);
router.get("/profils/:id", profilControllers.read);

/* ***************************CAR********************************************** */
const carControllers = require("./controllers/carControllers");

router.get("/cars", checkCredentials, carControllers.browse);
router.get("/cars/:id", carControllers.read);
router.post(
  "/cars",
  upload.single("image"),
  checkCredentials,
  carControllers.add
);

/* ***************************RESERVATION************************************ */

const reservationControllers = require("./controllers/reservationControllers");

router.get("/reservations", checkCredentials, reservationControllers.browse);
router.get("/reservations/:id", checkCredentials, reservationControllers.read);
router.post("/reservations", checkCredentials, reservationControllers.add);

/* ************************************************************************* */

module.exports = router;
