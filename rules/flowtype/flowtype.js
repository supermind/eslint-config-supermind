module.exports = {

  /**
   * Flowtype plugin rules
   * @see https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules
   */
  rules: {

    /**
     * Enforces a particular style for boolean type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#boolean-style
     * @fixable
     */
    'flowtype/boolean-style': [ 'error', 'boolean' ],

    /**
     * Marks Flow type identifiers as defined
     * @see https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
     */
    'flowtype/define-flow-type': 'error',

    /**
     * Enforces consistent use of trailing commas in Object and Tuple annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
     * @fixable
     */
    'flowtype/delimiter-dangle': [ 'error', 'never' ],

    /**
     * Enforces consistent spacing within generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
     * @fixable
     */
    'flowtype/generic-spacing': [ 'error', 'never' ],

    /**
     * Checks for duplicate properties in Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
     */
    'flowtype/no-dupe-keys': 'error',

    /**
     * Warns against weak type annotations any, Object and Function
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
     */
    'flowtype/no-weak-types': 'error',

    /**
     * Enforces consistent separators between properties in Flow object types
     * @see https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
     * @fixable
     */
    'flowtype/object-type-delimiter': [ 'error', 'comma' ],

    /**
     * Requires that all function parameters have type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
     */
    'flowtype/require-parameter-type': [ 'error', {
      excludeArrowFunctions: false
    }],

    /**
     * Requires that functions have return type annotation
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-return-type
     */
    'flowtype/require-return-type': [ 'error', {
      excludeArrowFunctions: false,
      annotateUndefined: 'never'
    }],

    /**
     * Validates Flow file annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
     */
    'flowtype/require-valid-file-annotation': [ 'error', 'never' ],

    /**
     * Enforces consistent use of semicolons after type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#semi
     * @fixable
     */
    'flowtype/semi': [ 'error', 'never' ],

    /**
     * Enforces sorting of Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#sort-keys
     */
    'flowtype/sort-keys': [ 'error', 'asc', {
      caseSensitive: true,
      natural: false
    }],

    /**
     * Enforces consistent spacing after the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
     * @fixable
     */
    'flowtype/space-after-type-colon': [ 'error', 'always' ],

    /**
     * Enforces consistent spacing before the opening < of generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
     * @fixable
     */
    'flowtype/space-before-generic-bracket': [ 'error', 'never' ],

    /**
     * Enforces consistent spacing before the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
     * @fixable
     */
    'flowtype/space-before-type-colon': [ 'error', 'never' ],

    /**
     * Enforces a consistent naming pattern for type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#type-id-match
     */
    'flowtype/type-id-match': [ 'error', '^([A-Z][a-z0-9]*)+Type$' ],

    /**
     * Enforces consistent spacing around union and intersection type separators (| and &)
     * @see https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
     * @fixable
     */
    'flowtype/union-intersection-spacing': [ 'error', 'always' ],

    /**
     * Marks Flow type alias declarations as used
     * @see https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
     */
    'flowtype/use-flow-type': 'error'
  }
}

