module.exports = {
  plugins: [
    'import'
  ],
  extends: [
    './helpful-warnings',
    './module-systems',
    './static-analysis',
    './style-guide'
  ].map(require.resolve)
}
