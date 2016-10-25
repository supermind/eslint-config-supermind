module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [ 'react' ],
  extends: [
    './jsx',
    './react'
  ].map(require.resolve)
}
