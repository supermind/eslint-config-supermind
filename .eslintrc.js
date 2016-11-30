module.exports = {
  root: true,
  extends: [
    './index.js',
    './flowtype.js',
    './react.js'
  ],
  rules: {
    'max-len': 'off',
    // Remove when issue resolved
    // https://github.com/gajus/eslint-plugin-flowtype/issues/165
    'flowtype/require-valid-file-annotation': 'off'
  }
}
