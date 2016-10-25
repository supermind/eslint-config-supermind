module.exports = {
  extends: [
    './errors',
    './es6',
    './node',
    './standards',
    './strict',
    './style',
    './variables'
  ].map(require.resolve)
}
