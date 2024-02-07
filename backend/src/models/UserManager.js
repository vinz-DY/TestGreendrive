const AbstractManager = require("./AbstractManager");
const client = require("../../database/client");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "user" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(mail, hashPassword) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [mail, hashPassword]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async readByEmail(mail) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await client.query(
      `SELECT * FROM ${this.table} WHERE mail = ?`,
      [mail]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific user by its ID

  //   const [rows] = await this.database.query(
  //     `select * from ${this.table} where id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the user
  //   return rows[0];
  // }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of users
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing user

  // async update(user) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an user by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = UserManager;
