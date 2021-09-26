const UserRepository = require('../repositories/user-repository');

class UserController {
  async index(request, response) {
    const users = await UserRepository.findAll();
    response.json(users);
  };

  async show(request, response) {
    const { id } = request.params;
    const user = await UserRepository.findById(id);

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    };

    response.json(user);
  };

  async store(request, response) {
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    };

    const user = await UserRepository.create({
      name,
      email,
      password,
    });

    response.json(user);
  };

  async update(request, response) {
    const { id } = request.params;
    const { name, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    };

    const user = await UserRepository.update(id, {
      name,
      email,
      password,
    });

    response.json(user);
  };

  async delete(request, response) {
    const { id } = request.params;

    await UserRepository.delete(id);

    response.sendStatus(204);
  };
};

module.exports = new UserController();
