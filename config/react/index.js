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
    './a11y',
    './jsx',
    './react'
  ].map(require.resolve)
}
