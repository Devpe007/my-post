const db = require('../../database');

class TopicRespository {
  async findAll() {
    const rows = await db.query('SELECT * FROM topics');
    return rows;
  };

  async create({ name }) {
    const [row] = await db.query(`
        INSERT INTO topics(name)
        VALUES($1)
        RETURNING *
    `, [name]);

    return row;
  };

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM topics WHERE id = $1', [id]);
    return deleteOp;
  };
};

module.exports = new TopicRespository();
