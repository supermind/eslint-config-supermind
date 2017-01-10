module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  extends: [
    './rules/react/react',
    './rules/react/jsx'
  ].map(require.resolve)
}
