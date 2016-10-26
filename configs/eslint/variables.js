module.exports = {

  // http://eslint.org/docs/rules/#variables
  rules: {

    // Require or disallow initialization in variable declarations
    // http://eslint.org/docs/rules/init-declarations
    'init-declarations': 'off',

    // Disallow catch clause parameters from shadowing variables in the outer scope
    // http://eslint.org/docs/rules/no-catch-shadow
    'no-catch-shadow': 'off',

    // Disallow deleting variables
    // http://eslint.org/docs/rules/no-delete-var
    'no-delete-var': 'off',

    // Disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    'no-label-var': 'off',

    // Disallow specified global variables
    // http://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': 'off',

    // Disallow identifiers from shadowing restricted names
    // http://eslint.org/docs/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    // http://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // Disallow initializing variables to undefined
    // http://eslint.org/docs/rules/no-undef-init
    'no-undef-init': 'off',

    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    // http://eslint.org/docs/rules/no-undef
    'no-undef': 'off',

    // Disallow the use of undefined as an identifier
    // http://eslint.org/docs/rules/no-undefined
    'no-undefined': 'off',

    // Disallow unused variables
    // http://eslint.org/docs/rules/no-unused-vars
    'no-unused-vars': 'off',

    // Disallow the use of variables before they are defined
    // http://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off'
  }
}
