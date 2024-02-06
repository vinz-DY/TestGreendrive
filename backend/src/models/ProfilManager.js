const AbstractManager = require("./AbstractManager");

class ProfilManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "profil" as configuration
    super({ table: "profil" });
  }

  // The C of CRUD - Create operation

  async create(profil, userId, file) {
    // Execute the SQL INSERT query to add a new profil to the "profil" table
    const [result] = await this.database.query(
      `insert into ${this.table} (lastname, name, gender, birthdate, postCode, cityProfil, image, user_id  ) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profil.lastname,
        profil.name,
        profil.gender,
        profil.birthdate,
        profil.postCode,
        profil.cityProfil,
        file.filename,
        userId,
      ]
    );

    // Return the ID of the newly inserted profil
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific profil by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the profil
    return rows;
  }

  async readByAuth(id) {
    // Execute the SQL SELECT query to retrieve a specific profil by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where user_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the profil
    return rows;
  }

  async readAll(searchTerm) {
    let query = `SELECT * FROM ${this.table}`;
    let params = [];

    if (searchTerm) {
      query += ` WHERE name LIKE ?`;
      params = [`%${searchTerm}%`];
    } else {
      query += " LIMIT 15";
    }

    const [rows] = await this.database.query(query, params);

    // Return the array of cars
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing profil

  // async update(profil) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an profil by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProfilManager;
