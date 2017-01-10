module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'inferno'
  ],
  extends: [
    './rules/inferno/inferno',
    './rules/inferno/jsx'
  ].map(require.resolve)
}
