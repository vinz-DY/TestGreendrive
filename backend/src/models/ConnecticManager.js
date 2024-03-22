const AbstractManager = require("./AbstractManager");

class connecticManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "connectic" as configuration
    super({ table: "connectic" });
  }

  // The C of CRUD - Create operation

  async create(connectic) {
    // Execute the SQL INSERT query to add a new connectic to the "connectic" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [connectic.title]
    );

    // Return the ID of the newly inserted connectic
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific connectic by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the connectic
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all connectics from the "connectic" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of connectics
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing connectic

  // async update(connectic) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an connectic by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = connecticManager;
