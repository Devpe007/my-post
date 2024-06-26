const PublicationRespository = require('../repositories/publication-repository');

class PublicationController {
  async index(request, response) {
    const publications = await PublicationRespository.findAll();
    response.json(publications);
  };

  async show(request, response) {
    const { id } = request.params;

    const publication = await PublicationRespository.findById(id);
    if (!publication) {
      return response.status(404).json({ error: 'Publication not found' });
    };

    response.json(publication);
  };

  async store(request, response) {
    const { sender, text, topic } = request.body;

    if (!text) {
      return response.status(400).json({ message: 'Please enter a subject' });
    };

    if (!topic) {
      return response.status(400).json({ message: 'Please enter a topic/topic not found' });
    };

    const publication = await PublicationRespository.create({
      sender,
      text,
      topic,
    });

    response.json(publication);
  };

  async update(request, response) {
    const { id } = request.params;
    const { text, topic } = request.body;

    if (!text) {
      return response.status(400).json({ message: 'Please enter a subject' });
    };

    if (!topic) {
      return response.status(400).json({ message: 'Please enter a topic/topic not found' });
    };

    const publication = await PublicationRespository.update(id, {
      text,
      topic,
    });

    response.json(publication);
  };

  async delete(request, response) {
    const { id } = request.params;

    const publication = await PublicationRespository.findById(id);
    if (!publication) {
      return response.status(404).json({ message: 'Publication not found' });
    };

    await PublicationRespository.delete(id);

    response.sendStatus(204);
  };
};

module.exports = new PublicationController();
