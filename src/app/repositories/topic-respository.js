const db = require('../../database');

class TopicRespository {
  async create({ name }) {
    const [row] = await db.query(`
        INSERT INTO topics(name)
        VALUES($1)
        RETURNING *
    `, [name]);

    return row;
  };
};

module.exports = new TopicRespository();
