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
    'flowtype/boolean-style': 'off',

    /**
     * Marks Flow type identifiers as defined
     * @see https://github.com/gajus/eslint-plugin-flowtype#define-flow-type
     */
    'flowtype/define-flow-type': 'off',

    /**
     * Enforces consistent use of trailing commas in Object and Tuple annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#delimiter-dangle
     * @fixable
     */
    'flowtype/delimiter-dangle': 'off',

    /**
     * Enforces consistent spacing within generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#generic-spacing
     * @fixable
     */
    'flowtype/generic-spacing': 'off',

    /**
     * Checks for duplicate properties in Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-dupe-keys
     */
    'flowtype/no-dupe-keys': 'off',

    /**
     * Warns against weak type annotations any, Object and Function
     * @see https://github.com/gajus/eslint-plugin-flowtype#no-weak-types
     */
    'flowtype/no-weak-types': 'off',

    /**
     * Enforces consistent separators between properties in Flow object types
     * @see https://github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
     * @fixable
     */
    'flowtype/object-type-delimiter': 'off',

    /**
     * Requires that all function parameters have type annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-parameter-type
     */
    'flowtype/require-parameter-type': 'off',

    /**
     * Requires that functions have return type annotation
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-return-type
     */
    'flowtype/require-return-type': 'off',

    /**
     * Validates Flow file annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#require-valid-file-annotation
     */
    'flowtype/require-valid-file-annotation': 'off',

    /**
     * Enforces consistent use of semicolons after type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#semi
     * @fixable
     */
    'flowtype/semi': 'off',

    /**
     * Enforces sorting of Object annotations
     * @see https://github.com/gajus/eslint-plugin-flowtype#sort-keys
     */
    'flowtype/sort-keys': 'off',

    /**
     * Enforces consistent spacing after the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
     * @fixable
     */
    'flowtype/space-after-type-colon': 'off',

    /**
     * Enforces consistent spacing before the opening < of generic type annotation parameters
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
     * @fixable
     */
    'flowtype/space-before-generic-bracket': 'off',

    /**
     * Enforces consistent spacing before the type annotation colon
     * @see https://github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
     * @fixable
     */
    'flowtype/space-before-type-colon': 'off',

    /**
     * Enforces a consistent naming pattern for type aliases
     * @see https://github.com/gajus/eslint-plugin-flowtype#type-id-match
     */
    'flowtype/type-id-match': 'off',

    /**
     * Enforces consistent spacing around union and intersection type separators (| and &)
     * @see https://github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
     * @fixable
     */
    'flowtype/union-intersection-spacing': 'off',

    /**
     * Marks Flow type alias declarations as used
     * @see https://github.com/gajus/eslint-plugin-flowtype#use-flow-type
     */
    'flowtype/use-flow-type': 'off'
  }
}

