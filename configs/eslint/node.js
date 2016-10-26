module.exports = {

  // http://eslint.org/docs/rules/#nodejs-and-commonjs
  rules: {

    // Require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    'global-require': 'off',

    // Require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': 'off',

    // Disallow require calls to be mixed with regular variable declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'off',

    // Disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'off',

    // Disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'off',

    // Disallow the use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'off',

    // Disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'off',

    // Disallow specified modules when loaded by require
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // Disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'off'
  }
}
