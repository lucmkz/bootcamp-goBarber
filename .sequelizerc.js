const { resolve } = require('path');

module.export = {
  config: resolve(__dirname, 'src', 'config', 'database'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'database'),
};
