module.exports = {

  // http://eslint.org/docs/user-guide/configuring#specifying-parser
  parser: 'babel-eslint',

  // http://eslint.org/docs/user-guide/configuring#specifying-parser-options
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      impliedStrict: true
    }
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    browser: true,
    node: true,
    es6: true
  },

  // http://eslint.org/docs/user-guide/configuring#configuring-plugins
  plugins: [
    'import',
    'html'
  ],

  // http://eslint.org/docs/user-guide/configuring#extending-configuration-files
  extends: [

    // ESLint base rules
    './rules/eslint/best-practices',
    './rules/eslint/errors',
    './rules/eslint/es6',
    './rules/eslint/node',
    './rules/eslint/strict',
    './rules/eslint/stylistic',
    './rules/eslint/variables',

    // Import plugin rules
    './rules/import/helpful-warnings',
    './rules/import/module-systems',
    './rules/import/static-analysis',
    './rules/import/style-guide'

  ].map(require.resolve)
}
