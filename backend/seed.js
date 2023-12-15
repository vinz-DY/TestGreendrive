// eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}]

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    // for (let i = 0; i < 5; i += 1) {
    //   queries.push(
    //     database.query(
    //       "insert into player(role_id,username, email, password) values (?,?,?,?)",
    //       [
    //         1,
    //         faker.internet.userName(),
    //         faker.internet.email(),
    //         faker.internet.password(),
    //       ]
    //     )
    //   );
    // }
    const queriesState = [];
    const state = [
      "insert into state(label) VALUES ('non active')",
      "insert into state(label) VALUES ('active')",
    ];
    for (let i = 0; i < state.length; i += 1) {
      queriesState.push(database.query(state[i]));
    }

    await Promise.all(queriesState);

    const queriesConnectic = [];
    const connectic = [
      "insert into connectic(plugType) VALUES ('T2')",
      "insert into connectic(plugType) VALUES ('EF')",
    ];
    for (let i = 0; i < connectic.length; i += 1) {
      queriesConnectic.push(database.query(connectic[i]));
    }
    await Promise.all(queriesConnectic);

    // .........INSERT TABLE USER ............................................
    const queriesUser = [];
    for (let i = 0; i < 10; i += 1) {
      queriesUser.push(
        database.query(
          "insert into user(mail, password, isAdmin) values (?,?,?)",
          [
            faker.internet.email(),
            faker.internet.password(),
            faker.datatype.boolean(),
          ]
        )
      );
    }
    await Promise.all(queriesUser);

    const queriesTerminal = [];
    const terminal = [
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-8E - Place Théo Lombard','Place Théo Lombard 13008 MARSEILLE-8E',5.383026,43.27085,'22','payant','24h/24 7j/7','43.27085,5.383026',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-3E - 28 Rue Jobin','28 Rue Jobin 0 MARSEILLE-3E',5.389845,43.309831,'22','payant','24h/24 7j/7','43.309831,5.389845',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-16E - Boulevard D''Annam','Boulevard D''Annam 0 MARSEILLE-16E',5.329846,43.361274,'22','payant','24h/24 7j/7','43.361274,5.329846',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-2E - 29 Boulevard De Dunkerque','29 Boulevard De Dunkerque 0 MARSEILLE-2E',5.367851,43.308184,'22','payant','24h/24 7j/7','43.308184,5.367851',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE-9E - 83-81 Boulevard Du Redon','83-81 Boulevard Du Redon 0 MARSEILLE-9E',5.421871,43.253283,'22','payant','24h/24 7j/7','43.253283,5.421871',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('MARSEILLE - Parking De La Mairie, Bd Bouyala D''Arnaud','Parking De La Mairie, Bd Bouyala D''Arnaud 13000 MARSEILLE',5.443135,43.297307,'4','payant','24h/24 7j/7','43.297307,5.443135',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Avenue Jean Orsini - Parking De La Salle Des Fêtes De Puyricard','Avenue Jean Orsini - Parking De La Salle Des Fêtes De Puyricard 13540 AIX-EN-PROVENCE',5.422441,43.580561,'22','payant','24h/24 7j/7','43.580561,5.422441',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('AIX-EN-PROVENCE - Cours Saint-Louis','Cours Saint-Louis 13090 AIX-EN-PROVENCE',5.453065,43.529819,'22','payant','24h/24 7j/7','43.529819,5.453065',NULL,1,2)",
      "insert into terminal(city,adresseStation,xlongitude,ylatitude,power,acces_recharge,access,localisation,region, connectic_id, state_id) VALUES ('ISTRES - Gymnase Donadieu','Gymnase Donadieu 13800 ISTRES',4.988791,43.507643,'18','payant','24h/24 7j/7','43.507643,4.988791',NULL,1,2)",
    ];
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
          "insert into profil(name, lastname, birthdate, user_id) values (?,?,?,?)",
          [
            faker.person.firstName(),
            faker.person.lastName(),
            faker.date.birthdate(),
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
          "insert into car(licensePlate, brand, model, connectic_id, user_id) values (?,?,?,?,?)",
          [
            faker.vehicle.vrm(),
            faker.vehicle.manufacturer(),
            faker.vehicle.model(),
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
