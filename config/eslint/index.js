module.exports = {
  extends: [
    './errors',
    './es6',
    './node',
    './standards',
    './style',
    './variables'
  ].map(require.resolve)
}
