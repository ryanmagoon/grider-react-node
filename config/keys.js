// figure out what set of keys to use
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}
