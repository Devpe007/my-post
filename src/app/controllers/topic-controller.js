const TopicRespository = require('../repositories/topic-respository');

class TopicController {
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
};

module.exports = new TopicController();
