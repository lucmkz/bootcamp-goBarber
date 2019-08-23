module.exports = {
  dialect: 'postgres',
  host: 'locahost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    undersoredAll: true,
  },
};
