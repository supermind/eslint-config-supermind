module.exports = {

  // Parser
  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // Parser Options
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

  // Environments
  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true
  },

  // Rules
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    'strict': 'error'
  },

  // Extend
  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [
    './config/base'
  ].map(require.resolve)
}
