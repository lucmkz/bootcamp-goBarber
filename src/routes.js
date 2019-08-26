import { Router } from 'express';
import User from './app/models/User';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Oi',
    email: 'oi@oi',
    password_hash: '12',
  });

  return res.json(user);
});

routes.post('/users', UserController.store);

export default routes;
