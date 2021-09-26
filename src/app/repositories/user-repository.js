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
};

module.exports = new UserRepository();
