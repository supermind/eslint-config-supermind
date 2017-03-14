module.exports = {
  root: true,
  extends: [
    './index.js',
    './react.js',
    './inferno.js',
    './jsx-a11y.js',
    './flowtype.js'
  ],
  rules: {
    'max-len': 'off',
    // Remove when issue resolved
    // https://github.com/gajus/eslint-plugin-flowtype/issues/165
    'flowtype/require-valid-file-annotation': 'off'
  }
}
