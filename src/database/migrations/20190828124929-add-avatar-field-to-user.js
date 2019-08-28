module.exports = {
  up: (queryInterface, Sequelize) => {},

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
