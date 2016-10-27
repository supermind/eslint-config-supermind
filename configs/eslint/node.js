module.exports = {

  // http://eslint.org/docs/rules/#nodejs-and-commonjs
  rules: {

    // Require return statements after callbacks
    // http://eslint.org/docs/rules/callback-return
    'callback-return': 'off',

    // Require require() calls to be placed at top-level module scope
    // http://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // Require error handling in callbacks
    // http://eslint.org/docs/rules/handle-callback-err
    'handle-callback-err': [ 'error', '^(err|error|.+Error)$' ],

    // Disallow require calls to be mixed with regular variable declarations
    // http://eslint.org/docs/rules/no-mixed-requires
    'no-mixed-requires': 'error',

    // Disallow new operators with calls to require
    // http://eslint.org/docs/rules/no-new-require
    'no-new-require': 'error',

    // Disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    'no-path-concat': 'error',

    // Disallow the use of process.env
    // http://eslint.org/docs/rules/no-process-env
    'no-process-env': 'error',

    // Disallow the use of process.exit()
    // http://eslint.org/docs/rules/no-process-exit
    'no-process-exit': 'error',

    // Disallow specified modules when loaded by require
    // http://eslint.org/docs/rules/no-restricted-modules
    'no-restricted-modules': 'off',

    // Disallow synchronous methods
    // http://eslint.org/docs/rules/no-sync
    'no-sync': 'error'
  }
}
