module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  extends: [
    './rules/react/a11y',
    './rules/react/jsx',
    './rules/react/react'
  ].map(require.resolve)
}
