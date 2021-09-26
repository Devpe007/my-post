const UserRepository = require('../repositories/user-repository');

class UserController {
  async index(request, response) {
    const users = await UserRepository.findAll();
    response.json(users);
  }

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
};

module.exports = new UserController();