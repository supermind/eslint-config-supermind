module.exports = {

  // http://eslint.org/docs/rules/#stylistic-issues
  rules: {

    // Enforce consistent spacing inside array brackets
    // http://eslint.org/docs/rules/array-bracket-spacing
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false
    }],

    // Enforce consistent spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    'block-spacing': [ 'error', 'always' ],

    // Enforce consistent brace style for blocks
    // http://eslint.org/docs/rules/brace-style
    'brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    }],

    // Enforce camelcase naming convention
    // http://eslint.org/docs/rules/camelcase
    'camelcase': 'error',

    // Require or disallow trailing commas
    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [ 'error', 'only-multiline' ],

    // Enforce consistent spacing before and after commas
    // http://eslint.org/docs/rules/comma-spacing
    'comma-spacing': [ 'error', {
      before: false,
      after: true
    }],

    // Enforce consistent comma style
    // http://eslint.org/docs/rules/comma-style
    'comma-style': [ 'error', 'last' ],

    // Enforce consistent spacing inside computed property brackets
    // http://eslint.org/docs/rules/computed-property-spacing
    'computed-property-spacing': [ 'error', 'never' ],

    // Enforce consistent naming when capturing the current execution context
    // http://eslint.org/docs/rules/consistent-this
    'consistent-this': [ 'error', 'self' ],

    // Require or disallow newline at the end of files
    // http://eslint.org/docs/rules/eol-last
    'eol-last': [ 'error', 'always' ],

    // Require or disallow spacing between function identifiers and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': [ 'error', 'never' ],

    // Require function names to match the name of the variable or property to which they are assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': 'off',

    // Require or disallow named function expressions
    // http://eslint.org/docs/rules/func-names
    'func-names': [ 'error', 'always' ],

    // Enforce the consistent use of either function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    'func-style': [ 'error', 'declaration', {
      allowArrowFunctions: true
    }],

    // Disallow specified identifiers
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': [ 'error', 'err' ],

    // Enforce minimum and maximum identifier lengths
    // http://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // http://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Enforce consistent indentation
    // http://eslint.org/docs/rules/indent
    'indent': [ 'error', 2, {
      SwitchCase: 1
    }],

    // Enforce the consistent use of either double or single quotes in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [ 'error', 'prefer-double' ],

    // Enforce consistent spacing between keys and values in object literal properties
    // http://eslint.org/docs/rules/key-spacing
    'key-spacing': 'error',

    // Enforce consistent spacing before and after keywords
    // http://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': 'error',

    // Enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    'line-comment-position': 'off',

    // Enforce consistent linebreak style
    // http://eslint.org/docs/rules/linebreak-style
    'linebreak-style': [ 'error', 'unix' ],

    // Require empty lines around comments
    // http://eslint.org/docs/rules/lines-around-comment
    'lines-around-comment': [ 'error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false
    }],

    // Require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': [ 'error', {
      before: 'never',
      after: 'always',
    }],

    // Enforce a maximum depth that blocks can be nested
    // http://eslint.org/docs/rules/max-depth
    'max-depth': [ 'error', {
      max: 4
    }],

    // Enforce a maximum line length
    // http://eslint.org/docs/rules/max-len
    'max-len': [ 'error', {
      code: 80,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    // Enforce a maximum number of lines per file
    // http://eslint.org/docs/rules/max-lines
    'max-lines': [ 'error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // Enforce a maximum depth that callbacks can be nested
    // http://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': [ 'error', {
      max: 4
    }],

    // Enforce a maximum number of parameters in function definitions
    // http://eslint.org/docs/rules/max-params
    'max-params': [ 'error', {
      max: 4
    }],

    // Enforce a maximum number of statements allowed per line
    // http://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [ 'error', {
      max: 2
    }],

    // Enforce a maximum number of statements allowed in function blocks
    // http://eslint.org/docs/rules/max-statements
    'max-statements': [ 'error', {
      max: 10
    }],

    // Enforce newlines between operands of ternary expressions
    // http://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': 'off',

    // Require constructor names to begin with a capital letter
    // http://eslint.org/docs/rules/new-cap
    'new-cap': [ 'error', {
      newIsCap: true,
      capIsNew: true,
      properties: true
    }],

    // Require parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    'new-parens': 'error',

    // Require or disallow an empty line after variable declarations
    // http://eslint.org/docs/rules/newline-after-var
    'newline-after-var': 'off',

    // Require an empty line before return statements
    // http://eslint.org/docs/rules/newline-before-return
    'newline-before-return': 'off',

    // Require a newline after each call in a method chain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': 'off',

    // Disallow Array constructors
    // http://eslint.org/docs/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    'no-bitwise': 'error',

    // Disallow continue statements
    // http://eslint.org/docs/rules/no-continue
    'no-continue': 'error',

    // Disallow inline comments after code
    // http://eslint.org/docs/rules/no-inline-comments
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',

    // Disallow mixed binary operators
    // http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-operators': 'error',

    // Disallow mixed spaces and tabs for indentation
    // http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple empty lines
    // http://eslint.org/docs/rules/no-multiple-empty-lines
    'no-multiple-empty-lines': [ 'error', {
      max: 1
    }],

    // Disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    'no-negated-condition': 'error',

    // Disallow nested ternary expressions
    // http://eslint.org/docs/rules/no-nested-ternary
    'no-nested-ternary': 'off',

    // Disallow Object constructors
    // http://eslint.org/docs/rules/no-new-object
    'no-new-object': 'error',

    // Disallow the unary operators ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    'no-plusplus': 'off',

    // Disallow specified syntax
    // http://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': [ 'error', 'WithStatement' ],

    // Disallow tabs in file
    // http://eslint.org/docs/rules/no-tabs
    'no-tabs': 'error',

    // Disallow ternary operators
    // http://eslint.org/docs/rules/no-ternary
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // http://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    // http://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': 'error',

    // Disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 'error',

    // Enforce consistent line breaks inside braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: Enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': [ 'off', {
      minProperties: 0,
      multiline: true
    }],

    // Enforce consistent spacing inside braces
    // http://eslint.org/docs/rules/object-curly-spacing
    'object-curly-spacing': [ 'error', 'always' ],

    // Enforce placing object properties on separate lines
    // http://eslint.org/docs/rules/object-property-newline
    'object-property-newline': [ 'error', {
      allowMultiplePropertiesPerLine: true
    }],

    // Require or disallow newlines around variable declarations
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': 'off',

    // Enforce variables to be declared either together or separately in functions
    // http://eslint.org/docs/rules/one-var
    'one-var': 'off',

    // Require or disallow assignment operator shorthand where possible
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': 'off',

    // Enforce consistent linebreak style for operators
    // http://eslint.org/docs/rules/operator-linebreak
    'operator-linebreak': [ 'error', 'after' ],

    // Require or disallow padding within blocks
    // http://eslint.org/docs/rules/padded-blocks
    'padded-blocks': 'off',

    // Require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props
    'quote-props': [ 'error', 'consistent-as-needed' ],

    // Enforce the consistent use of either backticks, double, or single quotes
    // http://eslint.org/docs/rules/quotes
    'quotes': [ 'error', 'single' ],

    // Require JSDoc comments
    // http://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': [ 'off', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],

    // Enforce consistent spacing before and after semicolons
    // http://eslint.org/docs/rules/semi-spacing
    'semi-spacing': [ 'error', {
      before: false,
      after: true
    }],

    // Require or disallow semicolons instead of ASI
    // http://eslint.org/docs/rules/semi
    'semi': [ 'error', 'never' ],

    // Require object keys to be sorted
    // http://eslint.org/docs/rules/sort-keys
    'sort-keys': 'off',

    // Require variables within the same declaration block to be sorted
    // http://eslint.org/docs/rules/sort-vars
    'sort-vars': 'off',

    // Enforce consistent spacing before blocks
    // http://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': [ 'error', 'always' ],

    // Enforce consistent spacing before function definition opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': [ 'error', 'never' ],

    // Enforce consistent spacing inside parentheses
    // http://eslint.org/docs/rules/space-in-parens
    'space-in-parens': [ 'error', 'never' ],

    // Require spacing around infix operators
    // http://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': [ 'error', {
      nonwords: false,
      words: true
    }],

    // Enforce consistent spacing after the // or /* in a comment
    // http://eslint.org/docs/rules/spaced-comment
    'spaced-comment': [ 'error', 'always', {
      exceptions: [ '-', '=' ],
      block: {
        balanced: true
      }
    }],

    // Require or disallow Unicode byte order mark (BOM)
    // http://eslint.org/docs/rules/unicode-bom
    'unicode-bom': [ 'error', 'never' ],

    // Require parenthesis around regex literals
    // http://eslint.org/docs/rules/wrap-regex
    'wrap-regex': 'error'
  }
}
