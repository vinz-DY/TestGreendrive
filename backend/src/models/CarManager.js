const AbstractManager = require("./AbstractManager");

class carManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "car" as configuration
    super({ table: "car" });
  }

  // The C of CRUD - Create operation

  async create(car, userId, file) {
    // Vérifiez si 'connectic' est défini

    // Execute the SQL INSERT query to add a new car to the "car" table
    const [result] = await this.database.query(
      `insert into ${this.table} (licensePlate, brand, model, image, connectic_id, user_id) values (?,?,?,?,?,?)`,
      [
        car.licensePlate,
        car.brand,
        car.model,
        file.path,
        car.connectic_id,
        userId,
      ]
    );

    // Return the ID of the newly inserted car
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific car by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the car
    return rows;
  }

  async readAll(searchTerm) {
    let query = `SELECT * FROM ${this.table}`;
    let params = [];

    if (searchTerm) {
      query += ` WHERE brand LIKE ?`;
      params = [`%${searchTerm}%`];
    } else {
      query += " LIMIT 15";
    }

    const [rows] = await this.database.query(query, params);

    // Return the array of cars
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing car

  // async update(car) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an car by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = carManager;
