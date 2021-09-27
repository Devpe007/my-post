const PublicationRespository = require('../repositories/publication-repository');

class PublicationController {
  async store(request, response) {
    const { sender, text, topic } = request.body;

    if (!text) {
      return response.status(400).json({ message: 'Please enter a subject' });
    };

    if (!topic) {
      return response.status(400).json({ message: 'Please enter a topic' });
    };

    const publication = await PublicationRespository.create({
      sender,
      text,
      topic,
    });

    response.json(publication);
  };
};

module.exports = new PublicationController();
