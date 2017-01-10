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
    './rules/react/jsx',
    './rules/react/react'
  ].map(require.resolve)
}
