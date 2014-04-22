module.exports = process.env.GEPO_COV
  ? require('./lib-cov')
  : require('./lib')
