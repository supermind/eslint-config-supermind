module.exports = {

  /**
   * Possible error rules
   * @see http://eslint.org/docs/rules/#possible-errors
   */
  rules: {

    /**
     * Enforce 'for loop' update clause moving the counter in the right direction
     * @see http://eslint.org/docs/rules/for-direction
     */
    'for-direction': 'error',

    /**
     * Enforce return statements in getters
     * @see http://eslint.org/docs/rules/getter-return
     */
    'getter-return': 'error',

    /**
     * Disallow await inside of loops
     * @see http://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'error',

    /**
     * Disallow comparing against -0
     * @see http://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'error',

    /**
     * Disallow assignment operators in conditional expressions
     * @see http://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': 'error',

    /**
     * Disallow the use of console
     * @see http://eslint.org/docs/rules/no-console
     */
    'no-console': 'off',

    /**
     * Disallow constant expressions in conditions
     * @see http://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * Disallow control characters in regular expressions
     * @see http://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of debugger
     * @see http://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * Disallow duplicate arguments in function definitions
     * @see http://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate keys in object literals
     * @see http://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case labels
     * @see http://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow empty character classes in regular expressions
     * @see http://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow empty block statements
     * @see http://eslint.org/docs/rules/no-empty
     */
    'no-empty': 'error',

    /**
     * Disallow reassigning exceptions in catch clauses
     * @see http://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * Disallow unnecessary boolean casts
     * @see http://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'error',

    /**
     * Disallow unnecessary parentheses
     * @see http://eslint.org/docs/rules/no-extra-parens
     * @fixable
     */
    'no-extra-parens': 'off',

    /**
     * Disallow unnecessary semicolons
     * @see http://eslint.org/docs/rules/no-extra-semi
     * @fixable
     */
    'no-extra-semi': 'error',

    /**
     * Disallow reassigning function declarations
     * @see http://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'error',

    /**
     * Disallow variable or function declarations in nested blocks
     * @see http://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'error',

    /**
     * Disallow invalid regular expression strings in RegExp constructors
     * @see http://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'error',

    /**
     * Disallow irregular whitespace outside of strings and comments
     * @see http://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'error',

    /**
     * Disallow calling global object properties as functions
     * @see http://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'error',

    /**
     * Disallow calling some Object.prototype methods directly on objects
     * @see http://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'error',

    /**
     * Disallow multiple spaces in regular expressions
     * @see http://eslint.org/docs/rules/no-regex-spaces
     * @fixable
     */
    'no-regex-spaces': 'error',

    /**
     * Disallow sparse arrays
     * @see http://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings
     * @see http://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',

    /**
     * Disallow confusing multiline expressions
     * @see http://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * Disallow unreachable code after return, throw, continue, and break statements
     * @see http://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'error',

    /**
     * Disallow control flow statements in finally blocks
     * @see http://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * Disallow negating the left operand of relational operators
     * @see http://eslint.org/docs/rules/no-unsafe-negation
     * @fixable
     */
    'no-unsafe-negation': 'error',

    /**
     * Require calls to isNaN() when checking for NaN
     * @see http://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'error',

    /**
     * Enforce valid JSDoc comments
     * @see http://eslint.org/docs/rules/valid-jsdoc
     */
    'valid-jsdoc': [ 'error', {
      matchDescription: '.+',
      requireReturnType: true,
      requireReturnDescription: true,
      requireParamDescription: true,
      prefer: {
        arg: 'param',
        argument: 'param',
        return: 'returns'
      },
      preferType: {
        Array: 'array',
        Boolean: 'boolean',
        Function: 'function',
        Number: 'number',
        Object: 'object',
        String: 'string'
      }
    }],

    /**
     * Enforce comparing typeof expressions against valid strings
     * @see http://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': 'error'
  }
}

