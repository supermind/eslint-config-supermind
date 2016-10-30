module.exports = {
  extends: [
    './best-practices',
    './errors',
    './es6',
    './node',
    './strict',
    './stylistic',
    './variables'
  ].map(require.resolve)
}
