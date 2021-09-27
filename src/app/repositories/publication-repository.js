const db = require('../../database');

class PublicationRespository {
  async findAll() {
    const rows = await db.query('SELECT * FROM publications');
    return rows;
  };

  async findById(id) {
    const row = await db.query('SELECT * FROM publications WHERE id = $1', [id]);
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

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM publications WHERE id = $1', [id]);
    return deleteOp;
  }
};

module.exports = new PublicationRespository();
