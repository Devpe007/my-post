const db = require('../../database');

class PublicationRespository {
  async create({ sender, text, topic }) {
    const [row] = await db.query(`
        INSERT INTO publications(sender, text, topic)
        VALUES($1, $2, $3)
        RETURNING *
    `, [sender, text, topic]);

    return row;
  };
};

module.exports = new PublicationRespository();
