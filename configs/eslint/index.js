module.exports = {
  extends: [
    './best-practices',
    './errors',
    './es6',
    './imports',
    './node',
    './strict',
    './stylistic',
    './variables'
  ].map(require.resolve)
}
