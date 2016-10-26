module.exports = {
  extends: [
    './best-practices',
    './errors',
    './es6',
    './imports',
    './node',
    './strict',
    './style',
    './variables'
  ].map(require.resolve)
}
