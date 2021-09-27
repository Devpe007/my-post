const db = require('../../database');

class PublicationRespository {
  async findAll() {
    const row = await db.query('SELECT * FROM publications');
    return row;
  };

  async create({ sender, text, topic }) {
    const [row] = await db.query(`
        INSERT INTO publications(sender, text, topic)
        VALUES($1, $2, $3)
        RETURNING *
    `, [sender, text, topic]);

    return row;
  };

  async update(id, { text, topic }) {
    const rows = await db.query(`
        UPDATE publications
        SET text = $1, topic = $2
        WHERE id = $3
        RETURNING *
    `, [text, topic, id]);

    return rows;
  };
};

module.exports = new PublicationRespository();
