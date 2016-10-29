module.exports = {

  // http://eslint.org/docs/rules/#possible-errors
  rules: {

    // Disallow assignment operators in conditional expressions
    // http://eslint.org/docs/rules/no-cond-assign
    'no-cond-assign': 'error',

    // Disallow the use of console
    // http://eslint.org/docs/rules/no-console
    'no-console': 'error',

    // Disallow constant expressions in conditions
    // http://eslint.org/docs/rules/no-constant-condition
    'no-constant-condition': 'error',

    // Disallow control characters in regular expressions
    // http://eslint.org/docs/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow the use of debugger
    // http://eslint.org/docs/rules/no-debugger
    'no-debugger': 'error',

    // Disallow duplicate arguments in function definitions
    // http://eslint.org/docs/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate keys in object literals
    // http://eslint.org/docs/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    // http://eslint.org/docs/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow empty character classes in regular expressions
    // http://eslint.org/docs/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow empty block statements
    // http://eslint.org/docs/rules/no-empty
    'no-empty': 'error',

    // Disallow reassigning exceptions in catch clauses
    // http://eslint.org/docs/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts
    // http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 'error',

    // Disallow unnecessary semicolons
    // http://eslint.org/docs/rules/no-extra-semi
    'no-extra-semi': 'error',

    // Disallow reassigning function declarations
    // http://eslint.org/docs/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // http://eslint.org/docs/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // http://eslint.org/docs/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace outside of strings and comments
    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow calling global object properties as functions
    // http://eslint.org/docs/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow calling some Object.prototype methods directly on objects
    // http://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow multiple spaces in regular expressions
    // http://eslint.org/docs/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Disallow sparse arrays
    // http://eslint.org/docs/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions
    // http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // http://eslint.org/docs/rules/no-unreachable
    'no-unreachable': 'error',

    // Disallow control flow statements in finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    // http://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Require calls to isNaN() when checking for NaN
    // http://eslint.org/docs/rules/use-isnan
    'use-isnan': 'error',

    // Enforce valid JSDoc comments
    // http://eslint.org/docs/rules/valid-jsdoc
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

    // Enforce comparing typeof expressions against valid strings
    // http://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'error'
  }
}

