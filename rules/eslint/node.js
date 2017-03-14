module.exports = {

  /**
   * Node and CommonJS rules
   * @see http://eslint.org/docs/rules/#nodejs-and-commonjs
   */
  rules: {

    /**
     * Require return statements after callbacks
     * @see http://eslint.org/docs/rules/callback-return
     */
    'callback-return': 'off',

    /**
     * Require require() calls to be placed at top-level module scope
     * @see http://eslint.org/docs/rules/global-require
     */
    'global-require': 'off',

    /**
     * Require error handling in callbacks
     * @see http://eslint.org/docs/rules/handle-callback-err
     */
    'handle-callback-err': [ 'error', '^(err|error|.+Error)$' ],

    /**
     * Disallow require calls to be mixed with regular variable declarations
     * @see http://eslint.org/docs/rules/no-mixed-requires
     */
    'no-mixed-requires': 'error',

    /**
     * Disallow new operators with calls to require
     * @see http://eslint.org/docs/rules/no-new-require
     */
    'no-new-require': 'error',

    /**
     * Disallow string concatenation with __dirname and __filename
     * @see http://eslint.org/docs/rules/no-path-concat
     */
    'no-path-concat': 'error',

    /**
     * Disallow the use of process.env
     * @see http://eslint.org/docs/rules/no-process-env
     */
    'no-process-env': 'error',

    /**
     * Disallow the use of process.exit()
     * @see http://eslint.org/docs/rules/no-process-exit
     */
    'no-process-exit': 'error',

    /**
     * Disallow specified modules when loaded by require
     * @see http://eslint.org/docs/rules/no-restricted-modules
     */
    'no-restricted-modules': 'off',

    /**
     * Disallow synchronous methods
     * @see http://eslint.org/docs/rules/no-sync
     */
    'no-sync': 'off'
  }
}
