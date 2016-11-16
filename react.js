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
    './rules/react/jsx',
    './rules/react/react',
    './rules/react/a11y'
  ].map(require.resolve)
}
