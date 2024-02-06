const AbstractManager = require("./AbstractManager");

class TerminalManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "terminal" as configuration
    super({ table: "terminal" });
  }

  // The C of CRUD - Create operation

  // async create(terminal) {
  // Execute the SQL INSERT query to add a new terminal to the "terminal" table
  // const [result] = await this.database.query(
  //   `insert into ${this.table} (title) values (?)`,
  //   [terminal.title]
  // );

  // Return the ID of the newly inserted terminal
  //   return result.insertId;
  // }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific terminal by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the terminal
    return rows[0];
  }

  async readAll(searchTerm) {
    let query = `SELECT * FROM ${this.table}`;
    let params = [];

    if (searchTerm) {
      query += ` WHERE city LIKE ?`;
      params = [`%${searchTerm}%`];
    } else {
      query += " LIMIT 15";
    }

    const [rows] = await this.database.query(query, params);

    // Return the array of cars
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, terminal) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET city = ?, adresseStation = ?, acces_recharge = ?, access = ?, localisation = ? WHERE id = ?`,
      [
        terminal.city,
        terminal.adresseStation,
        // terminal.xlongitude,
        // terminal.ylatitude,
        // terminal.power,
        terminal.acces_recharge,
        terminal.access,
        terminal.localisation,
        // terminal.region,
        // terminal.image,
        // terminal.connectic_id,
        // terminal.state_id,
        id,
      ]
    );

    // Return the ID of the newly inserted terminal
    return result.insertId;
  }
  // TODO: Implement the update operation to modify an existing terminal

  // async update(terminal) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an terminal by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = TerminalManager;
