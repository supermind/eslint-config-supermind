module.exports = {

  // http://eslint.org/docs/rules/#ecmascript-6
  rules: {

    // Require braces around arrow function bodies
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': [ 'error', 'as-needed', {
      requireReturnForObjectLiteral: false
    }],

    // Require parentheses around arrow function arguments
    // http://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [ 'error', 'as-needed', {
      requireForBlockBody: true
    }],

    // Enforce consistent spacing before and after the arrow in arrow functions
    // http://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': [ 'error', {
      before: true,
      after: true
    }],

    // Require super() calls in constructors
    // http://eslint.org/docs/rules/constructor-super
    'constructor-super': 'error',

    // Enforce consistent spacing around * operators in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    'generator-star-spacing': [ 'error', {
      before: true,
      after: false
    }],

    // Disallow reassigning class members
    // http://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': [ 'error', {
      allowParens: true
    }],

    // Disallow reassigning const variables
    // http://eslint.org/docs/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow duplicate module imports
    // http://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': [ 'error', {
      includeExports: false
    }],

    // Disallow new operators with the Symbol object
    // http://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // Disallow specified modules when loaded by import
    // http://eslint.org/docs/rules/no-restricted-imports
    'no-restricted-imports': 'off',

    // Disallow this/super before calling super() in constructors
    // http://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unnecessary computed property keys in object literals
    // http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructors
    // http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': 'error',

    // Require let or const instead of var
    // http://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [ 'error', 'always' ],

    // Require arrow functions as callbacks
    // http://eslint.org/docs/rules/prefer-arrow-callback
    'prefer-arrow-callback': 'error',

    // Require const declarations for variables that are never reassigned after declared
    // http://eslint.org/docs/rules/prefer-const
    'prefer-const': [ 'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'off',

    // Require Reflect methods where applicable
    // http://eslint.org/docs/rules/prefer-reflect
    'prefer-reflect': 'off',

    // Require rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Require spread operators instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // Require template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    'prefer-template': 'error',

    // Require generator functions to contain yield
    // http://eslint.org/docs/rules/require-yield
    'require-yield': 'error',

    // Enforce spacing between rest and spread operators and their expressions
    // http://eslint.org/docs/rules/rest-spread-spacing
    'rest-spread-spacing': [ 'error', 'never' ],

    // Enforce sorted import declarations within modules
    // http://eslint.org/docs/rules/sort-imports
    'sort-imports': 'off',

    // Require symbol descriptions
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // Require or disallow spacing around embedded expressions of template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': [ 'error', 'never' ],

    // Require or disallow spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    'yield-star-spacing': [ 'error', {
      before: false,
      after: true
    }]
  }
}
