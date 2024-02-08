const AbstractManager = require("./AbstractManager");

class ReservationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "reservation" as configuration
    super({ table: "reservation" });
  }

  // The C of CRUD - Create operation

  async create(reservation, userId) {
    // Execute the SQL INSERT query to add a new reservation to the "reservation" table
    const [result] = await this.database.query(
      `insert into ${this.table} (startTime, user_id, terminal_id) values (?, ?, ?)`,
      [reservation.startTime, userId, reservation.terminal_id]
    );

    // Return the ID of the newly inserted reservation
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific reservation by its ID
    const [rows] = await this.database.query(
      `select reservation.*, terminal.adresseStation as terminal_adresseStation from ${this.table} LEFT JOIN terminal ON reservation.terminal_id = terminal.id where reservation.user_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the reservation
    return rows;
  }

  async readAll(userId) {
    // Execute the SQL SELECT query to retrieve all reservations from the "reservation" table
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [userId]
    );

    // Return the array of reservations
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing reservation

  // async update(reservation) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an reservation by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ReservationManager;
