module.exports = {

  /**
   * Variable rules
   * @see http://eslint.org/docs/rules/#variables
   */
  rules: {

    /**
     * Require or disallow initialization in variable declarations
     * @see http://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': [ 'off', 'always' ],

    /**
     * Disallow catch clause parameters from shadowing variables in the outer scope
     * @see http://eslint.org/docs/rules/no-catch-shadow
     */
    'no-catch-shadow': 'error',

    /**
     * Disallow deleting variables
     * @see http://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': 'error',

    /**
     * Disallow labels that share a name with a variable
     * @see http://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': 'error',

    /**
     * Disallow specified global variables
     * @see http://eslint.org/docs/rules/no-restricted-globals
     */
    'no-restricted-globals': 'off',

    /**
     * Disallow identifiers from shadowing restricted names
     * @see http://eslint.org/docs/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * @see http://eslint.org/docs/rules/no-shadow
     */
    'no-shadow': [ 'error', {
      builtinGlobals: false,
      hoist: 'functions',
      allow: []
    }],

    /**
     * Disallow initializing variables to undefined
     * @see http://eslint.org/docs/rules/no-undef-init
     * @fixable
     */
    'no-undef-init': 'error',

    /**
     * Disallow the use of undeclared variables unless mentioned in /* global * / comments
     * @see http://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * Disallow the use of undefined as an identifier
     * @see http://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': 'error',

    /**
     * Disallow unused variables
     * @see http://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [ 'error', {
      caughtErrors: 'all',
      args: 'after-used',
      vars: 'all'
    }],

    /**
     * Disallow the use of variables before they are defined
     * @see http://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': [ 'error', {
      functions: true,
      classes: true
    }]
  }
}
