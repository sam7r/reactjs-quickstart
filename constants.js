const path = require('path');

const ABSOLUTE_BASE = path.normalize(path.join(__dirname));

const constants = Object.freeze({
  ABSOLUTE_BASE,
  NODE_MODULES_DIR: path.join(ABSOLUTE_BASE, 'node_modules'),
  BUILD_DIR: path.join(ABSOLUTE_BASE, 'build'),
  DIST_DIR: path.join(ABSOLUTE_BASE, 'dist'),
  SRC_DIR: path.join(ABSOLUTE_BASE, 'src'),
  ASSETS_DIR: path.join(ABSOLUTE_BASE, 'assets'),
  HOT_RELOAD_URL: 'http://localhost',
  HOT_RELOAD_PORT: process.env.HOT_RELOAD_PORT || 8081,
  NODE_APP_PORT: process.env.HOT_RELOAD_PORT || 3000
});

module.exports = constants;
