const db = require('../../database');

class UserRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM users');
    return rows;
  };

  async create({ name, email, password }) {
    const row = await db.query(`
        INSERT INTO users(name, email, password)
        VALUES($1, $2, $3)
        RETURNING *
    `, [name, email, password]);
    return row;
  };

  async update(id, { name, email, password }) {
    const [rows] = await db.query(`
        UPDATE users
        SET name = $1, email = $2, password = $3
        WHERE id = $4
        RETURNING *
    `, [name, email, password, id]);

    return rows;
  };
};

module.exports = new UserRepository();
