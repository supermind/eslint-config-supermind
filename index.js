module.exports = {

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true
  },

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    './config/eslint',
    './config/react'
  ].map(require.resolve)
}
