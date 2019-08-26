import jwt from 'jsonwebtoken';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Wrong Password' });
    }

    const { id, name } = user;

    return res.json({
      yser: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, '466972b56a71faef130c42420308b214', {
        expiresIn: '7d',
      }),
    });
  }
}

export default new SessionController();
