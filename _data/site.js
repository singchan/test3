const env = require('./env.js')
const config = require('./config.json')

module.exports = {
  ...env,
  ...config,
}
