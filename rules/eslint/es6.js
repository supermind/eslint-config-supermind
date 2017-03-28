module.exports = {

  /**
   * ES6 rules
   * @see http://eslint.org/docs/rules/#ecmascript-6
   */
  rules: {

    /**
     * Require braces around arrow function bodies
     * @see http://eslint.org/docs/rules/arrow-body-style
     * @fixable
     */
    'arrow-body-style': [ 'error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],

    /**
     * Require parentheses around arrow function arguments
     * @see http://eslint.org/docs/rules/arrow-parens
     * @fixable
     */
    'arrow-parens': [ 'error', 'always' ],

    /**
     * Enforce consistent spacing before and after the arrow in arrow functions
     * @see http://eslint.org/docs/rules/arrow-spacing
     * @fixable
     */
    'arrow-spacing': [ 'error', {
      before: true,
      after: true
    }],

    /**
     * Require super() calls in constructors
     * @see http://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * Enforce consistent spacing around * operators in generator functions
     * @see http://eslint.org/docs/rules/generator-star-spacing
     * @fixable
     */
    'generator-star-spacing': [ 'error', 'both' ],

    /**
     * Disallow reassigning class members
     * @see http://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow arrow functions where they could be confused with comparisons
     * @see http://eslint.org/docs/rules/no-confusing-arrow
     */
    'no-confusing-arrow': [ 'error', {
      allowParens: true
    }],

    /**
     * Disallow reassigning const variables
     * @see http://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallow duplicate class members
     * @see http://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate module imports
     * @see http://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': [ 'error', {
      includeExports: false
    }],

    /**
     * Disallow new operators with the Symbol object
     * @see http://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow specified modules when loaded by import
     * @see http://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * Disallow this/super before calling super() in constructors
     * @see http://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow unnecessary computed property keys in object literals
     * @see http://eslint.org/docs/rules/no-useless-computed-key
     * @fixable
     */
    'no-useless-computed-key': 'error',

    /**
     * Disallow unnecessary constructors
     * @see http://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'error',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name
     * @see http://eslint.org/docs/rules/no-useless-rename
     * @fixable
     */
    'no-useless-rename': 'error',

    /**
     * Require let or const instead of var
     * @see http://eslint.org/docs/rules/no-var
     * @fixable
     */
    'no-var': 'error',

    /**
     * Require or disallow method and property shorthand syntax for object literals
     * @see http://eslint.org/docs/rules/object-shorthand
     * @fixable
     */
    'object-shorthand': [ 'error', 'always' ],

    /**
     * Require arrow functions as callbacks
     * @see http://eslint.org/docs/rules/prefer-arrow-callback
     * @fixable
     */
    'prefer-arrow-callback': 'off',

    /**
     * Require const declarations for variables that are never reassigned after declared
     * @see http://eslint.org/docs/rules/prefer-const
     * @fixable
     */
    'prefer-const': [ 'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],

    /**
     * Require destructuring from arrays and/or objects
     * @see http://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': [ 'error', {
      array: true,
      object: true
    }, {
      enforceForRenamedProperties: true
    }],

    /**
     * Disallow parseInt() in favor of binary, octal, and hexadecimal literals
     * @see http://eslint.org/docs/rules/prefer-numeric-literals
     * @fixable
     */
    'prefer-numeric-literals': 'off',

    /**
     * Require Reflect methods where applicable
     * @see http://eslint.org/docs/rules/prefer-reflect
     */
    'prefer-reflect': 'error',

    /**
     * Require rest parameters instead of arguments
     * @see http://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * Require spread operators instead of .apply()
     * @see http://eslint.org/docs/rules/prefer-spread
     * @fixable
     */
    'prefer-spread': 'error',

    /**
     * Require template literals instead of string concatenation
     * @see http://eslint.org/docs/rules/prefer-template
     * @fixable
     */
    'prefer-template': 'error',

    /**
     * Require generator functions to contain yield
     * @see http://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * Enforce spacing between rest and spread operators and their expressions
     * @see http://eslint.org/docs/rules/rest-spread-spacing
     * @fixable
     */
    'rest-spread-spacing': [ 'error', 'never' ],

    /**
     * Enforce sorted import declarations within modules
     * @see http://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': [ 'off', {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ]
    }],

    /**
     * Require symbol descriptions
     * @see http://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'error',

    /**
     * Require or disallow spacing around embedded expressions of template strings
     * @see http://eslint.org/docs/rules/template-curly-spacing
     * @fixable
     */
    'template-curly-spacing': [ 'error', 'never' ],

    /**
     * Require or disallow spacing around the * in yield* expressions
     * @see http://eslint.org/docs/rules/yield-star-spacing
     * @fixable
     */
    'yield-star-spacing': [ 'error', 'before' ]
  }
}
