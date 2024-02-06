// eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

const terminal = require("./database/terminal");
const connectic = require("./database/connectic");
const state = require("./database/state");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */
    // Generating Seed Data

    const queriesState = [];
    for (let i = 0; i < state.length; i += 1) {
      queriesState.push(database.query(state[i]));
    }

    await Promise.all(queriesState);

    const queriesConnectic = [];
    for (let i = 0; i < connectic.length; i += 1) {
      queriesConnectic.push(database.query(connectic[i]));
    }
    await Promise.all(queriesConnectic);

    // .........INSERT TABLE USER ............................................
    const queriesUser = [];
    for (let i = 0; i < 10; i += 1) {
      queriesUser.push(
        database.query(
          "insert into user(mail, password, role) values (?,?,?)",
          [
            faker.internet.email(),
            faker.internet.password(),
            faker.datatype.boolean(),
          ]
        )
      );
    }
    await Promise.all(queriesUser);

    // .........INSERT TABLE Terminal ............................................
    const queriesTerminal = [];

    for (let i = 0; i < terminal.length; i += 1) {
      queriesTerminal.push(database.query(terminal[i]));
    }

    await Promise.all(queriesTerminal);

    // .........INSERT TABLE profil ............................................
    const queriesProfil = [];
    for (let i = 0; i < 10; i += 1) {
      const userId = i + 1;
      queriesProfil.push(
        database.query(
          "insert into profil(lastname, name, gender, birthdate, postCode, cityProfil, image, user_id) values (?,?,?,?,?,?,?,?)",
          [
            faker.person.lastName(),
            faker.person.firstName(),
            faker.person.sex(),
            faker.date.birthdate(),
            faker.address.zipCode(),
            faker.address.city(),
            faker.image.avatar(),
            userId,
          ]
        )
      );
    }
    await Promise.all(queriesProfil);

    // .........INSERT TABLE car ............................................
    const queriesCar = [];
    for (let i = 0; i < 10; i += 1) {
      const userId = i + 1;
      const connecticId = Math.round(Math.random()) + 1;
      queriesCar.push(
        database.query(
          "insert into car(licensePlate, brand, model,image, connectic_id, user_id) values (?,?,?,?,?,?)",
          [
            faker.vehicle.vrm(),
            faker.vehicle.manufacturer(),
            faker.vehicle.model(),
            faker.image.urlLoremFlickr({ category: "car" }),
            connecticId,
            userId,
          ]
        )
      );
    }
    await Promise.all(queriesCar);

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
