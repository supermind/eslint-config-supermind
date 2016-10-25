module.exports = {
  extends: [
    './errors',
    './es6',
    './imports',
    './node',
    './standards',
    './strict',
    './style',
    './variables'
  ].map(require.resolve)
}
