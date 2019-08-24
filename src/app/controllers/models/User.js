import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        enail: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provides: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

export default User;
