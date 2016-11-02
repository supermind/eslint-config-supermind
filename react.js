module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'jsx-a11y',
    'react'
  ],
  extends: [
    './rules/react/a11y',
    './rules/react/jsx',
    './rules/react/react'
  ].map(require.resolve)
}
