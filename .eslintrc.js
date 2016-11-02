module.exports = {
  root: true,
  extends: [
    './index.js',
    './flowtype.js',
    './react.js'
  ],
  rules: {
    'max-len': 'off',
    'import/no-commonjs': 'off',
    'import/unambiguous': 'off'
  }
}
