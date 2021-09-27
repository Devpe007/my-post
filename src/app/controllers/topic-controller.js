const TopicRespository = require('../repositories/topic-respository');

class TopicController {
  async index(request, response) {
    const topics = await TopicRespository.findAll();
    response.json(topics);
  };

  async store(request, response) {
    const { name } = request.body;
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    };

    const topic = await TopicRespository.create({
      name,
    });

    response.json(topic);
  };

  async delete(request, response) {
    const { id } = request.params;

    await TopicRespository.delete(id);

    response.sendStatus(204);
  };
};

module.exports = new TopicController();
