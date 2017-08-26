module.exports = {

  /**
   * Stylistic rules
   * @see http://eslint.org/docs/rules/#stylistic-issues
   */
  rules: {

    /**
     * Enforce linebreaks after opening and before closing array brackets
     * @see http://eslint.org/docs/rules/array-bracket-newline
     * @fixable
     */
    'array-bracket-newline': 'off',

    /**
     * Enforce consistent spacing inside array brackets
     * @see http://eslint.org/docs/rules/array-bracket-spacing
     * @fixable
     */
    'array-bracket-spacing': [ 'error', 'always', {
      objectsInArrays: false,
      arraysInArrays: false
    }],

    /**
     * Enforce line breaks after each array element
     * @see http://eslint.org/docs/rules/array-element-newline
     * @fixable
     */
    'array-element-newline': 'off',

    /**
     * Enforce consistent spacing inside single-line blocks
     * @see http://eslint.org/docs/rules/block-spacing
     * @fixable
     */
    'block-spacing': [ 'error', 'always' ],

    /**
     * Enforce consistent brace style for blocks
     * @see http://eslint.org/docs/rules/brace-style
     * @fixable
     */
    'brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    }],

    /**
     * Enforce camelcase naming convention
     * @see http://eslint.org/docs/rules/camelcase
     */
    'camelcase': 'error',

    /**
     * Enforce or disallow capitalization of the first letter of a comment
     * @see http://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': [ 'off', 'always', {
      ignoreConsecutiveComments: true,
      ignoreInlineComments: false
    }],

    /**
     * Require or disallow trailing commas
     * @see http://eslint.org/docs/rules/comma-dangle
     * @fixable
     */
    'comma-dangle': [ 'error', 'never' ],

    /**
     * Enforce consistent spacing before and after commas
     * @see http://eslint.org/docs/rules/comma-spacing
     * @fixable
     */
    'comma-spacing': [ 'error', {
      before: false,
      after: true
    }],

    /**
     * Enforce consistent comma style
     * @see http://eslint.org/docs/rules/comma-style
     * @fixable
     */
    'comma-style': [ 'error', 'last' ],

    /**
     * Enforce consistent spacing inside computed property brackets
     * @see http://eslint.org/docs/rules/computed-property-spacing
     * @fixable
     */
    'computed-property-spacing': [ 'error', 'never' ],

    /**
     * Enforce consistent naming when capturing the current execution context
     * @see http://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': [ 'error', 'self' ],

    /**
     * Require or disallow newline at the end of files
     * @see http://eslint.org/docs/rules/eol-last
     * @fixable
     */
    'eol-last': [ 'error', 'always' ],

    /**
     * Require or disallow spacing between function identifiers and their invocations
     * @see http://eslint.org/docs/rules/func-call-spacing
     * @fixable
     */
    'func-call-spacing': [ 'error', 'never' ],

    /**
     * Require function names to match the name of the variable or property to which they are assigned
     * @see http://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': 'off',

    /**
     * Require or disallow named function expressions
     * @see http://eslint.org/docs/rules/func-names
     */
    'func-names': [ 'error', 'always' ],

    /**
     * Enforce the consistent use of either function declarations or expressions
     * @see http://eslint.org/docs/rules/func-style
     */
    'func-style': [ 'error', 'declaration', {
      allowArrowFunctions: true
    }],

    /**
     * Disallow specified identifiers
     * @see http://eslint.org/docs/rules/id-blacklist
     */
    'id-blacklist': 'off',

    /**
     * Enforce minimum and maximum identifier lengths
     * @see http://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression
     * @see http://eslint.org/docs/rules/id-match
     */
    'id-match': 'off',

    /**
     * Enforce consistent indentation
     * @see http://eslint.org/docs/rules/indent
     * @fixable
     */
    'indent': [ 'error', 2, {
      SwitchCase: 1
    }],

    /**
     * Enforce the consistent use of either double or single quotes in JSX attributes
     * @see http://eslint.org/docs/rules/jsx-quotes
     * @fixable
     */
    'jsx-quotes': [ 'error', 'prefer-double' ],

    /**
     * Enforce consistent spacing between keys and values in object literal properties
     * @see http://eslint.org/docs/rules/key-spacing
     * @fixable
     */
    'key-spacing': 'error',

    /**
     * Enforce consistent spacing before and after keywords
     * @see http://eslint.org/docs/rules/keyword-spacing
     * @fixable
     */
    'keyword-spacing': 'error',

    /**
     * Enforce position of line comments
     * @see http://eslint.org/docs/rules/line-comment-position
     */
    'line-comment-position': 'off',

    /**
     * Enforce consistent linebreak style
     * @see http://eslint.org/docs/rules/linebreak-style
     * @fixable
     */
    'linebreak-style': [ 'error', 'unix' ],

    /**
     * Require empty lines around comments
     * @see http://eslint.org/docs/rules/lines-around-comment
     * @fixable
     */
    'lines-around-comment': [ 'error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false
    }],

    /**
     * Require or disallow newlines around directives
     * @see http://eslint.org/docs/rules/lines-around-directive
     * @fixable
     */
    'lines-around-directive': [ 'error', {
      before: 'never',
      after: 'always'
    }],

    /**
     * Enforce a maximum depth that blocks can be nested
     * @see http://eslint.org/docs/rules/max-depth
     */
    'max-depth': [ 'error', {
      max: 4
    }],

    /**
     * Enforce a maximum line length
     * @see http://eslint.org/docs/rules/max-len
     */
    'max-len': [ 'error', {
      code: 80,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true
    }],

    /**
     * Enforce a maximum number of lines per file
     * @see http://eslint.org/docs/rules/max-lines
     */
    'max-lines': [ 'error', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    /**
     * Enforce a maximum depth that callbacks can be nested
     * @see http://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': [ 'error', {
      max: 4
    }],

    /**
     * Enforce a maximum number of parameters in function definitions
     * @see http://eslint.org/docs/rules/max-params
     */
    'max-params': [ 'error', {
      max: 5
    }],

    /**
     * Enforce a maximum number of statements allowed per line
     * @see http://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': [ 'error', {
      max: 2
    }],

    /**
     * Enforce a maximum number of statements allowed in function blocks
     * @see http://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * Enforce newlines between operands of ternary expressions
     * @see http://eslint.org/docs/rules/multiline-ternary
     */
    'multiline-ternary': 'off',

    /**
     * Require constructor names to begin with a capital letter
     * @see http://eslint.org/docs/rules/new-cap
     */
    'new-cap': [ 'error', {
      newIsCap: true,
      capIsNew: true,
      properties: true
    }],

    /**
     * Require parentheses when invoking a constructor with no arguments
     * @see http://eslint.org/docs/rules/new-parens
     * @fixable
     */
    'new-parens': 'error',

    /**
     * Require or disallow an empty line after variable declarations
     * @see http://eslint.org/docs/rules/newline-after-var
     * @fixable
     */
    'newline-after-var': 'off',

    /**
     * Require an empty line before return statements
     * @see http://eslint.org/docs/rules/newline-before-return
     * @fixable
     */
    'newline-before-return': 'off',

    /**
     * Require a newline after each call in a method chain
     * @see http://eslint.org/docs/rules/newline-per-chained-call
     */
    'newline-per-chained-call': 'off',

    /**
     * Disallow Array constructors
     * @see http://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',

    /**
     * Disallow bitwise operators
     * @see http://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',

    /**
     * Disallow continue statements
     * @see http://eslint.org/docs/rules/no-continue
     */
    'no-continue': 'error',

    /**
     * Disallow inline comments after code
     * @see http://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'off',

    /**
     * Disallow if statements as the only statement in else blocks
     * @see http://eslint.org/docs/rules/no-lonely-if
     * @fixable
     */
    'no-lonely-if': 'error',

    /**
     * Disallow mixed binary operators
     * @see http://eslint.org/docs/rules/no-mixed-operators
     */
    'no-mixed-operators': 'error',

    /**
     * Disallow mixed spaces and tabs for indentation
     * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'error',

    /**
     * Disallow use of chained assignment expressions
     * @see http://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'off',

    /**
     * Disallow multiple empty lines
     * @see http://eslint.org/docs/rules/no-multiple-empty-lines
     * @fixable
     */
    'no-multiple-empty-lines': [ 'error', {
      max: 1
    }],

    /**
     * Disallow negated conditions
     * @see http://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': 'error',

    /**
     * Disallow nested ternary expressions
     * @see http://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'off',

    /**
     * Disallow Object constructors
     * @see http://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'error',

    /**
     * Disallow the unary operators ++ and --
     * @see http://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * Disallow specified syntax
     * @see http://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': [ 'error', 'WithStatement' ],

    /**
     * Disallow tabs in file
     * @see http://eslint.org/docs/rules/no-tabs
     */
    'no-tabs': 'error',

    /**
     * Disallow ternary operators
     * @see http://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': 'off',

    /**
     * Disallow trailing whitespace at the end of lines
     * @see http://eslint.org/docs/rules/no-trailing-spaces
     * @fixable
     */
    'no-trailing-spaces': 'error',

    /**
     * Disallow dangling underscores in identifiers
     * @see http://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'error',

    /**
     * Disallow ternary operators when simpler alternatives exist
     * @see http://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

    /**
     * Disallow whitespace before properties
     * @see http://eslint.org/docs/rules/no-whitespace-before-property
     * @fixable
     */
    'no-whitespace-before-property': 'error',

    /**
     * Enforce the location of single-line statements
     * @see http://eslint.org/docs/rules/nonblock-statement-body-position
     * @fixable
     */
    'nonblock-statement-body-position': [ 'error', 'beside' ],

    /**
     * Enforce consistent line breaks inside braces
     * @see http://eslint.org/docs/rules/object-curly-newline
     * @fixable
     * TODO: Enable once https://github.com/eslint/eslint/issues/6488 is resolved
     */
    'object-curly-newline': [ 'off', {
      minProperties: 0,
      multiline: true
    }],

    /**
     * Enforce consistent spacing inside braces
     * @see http://eslint.org/docs/rules/object-curly-spacing
     * @fixable
     */
    'object-curly-spacing': [ 'error', 'always' ],

    /**
     * Enforce placing object properties on separate lines
     * @see http://eslint.org/docs/rules/object-property-newline
     */
    'object-property-newline': [ 'error', {
      allowMultiplePropertiesPerLine: true
    }],

    /**
     * Require or disallow newlines around variable declarations
     * @see http://eslint.org/docs/rules/one-var-declaration-per-line
     * @fixable
     */
    'one-var-declaration-per-line': 'off',

    /**
     * Enforce variables to be declared either together or separately in functions
     * @see http://eslint.org/docs/rules/one-var
     */
    'one-var': 'off',

    /**
     * Require or disallow assignment operator shorthand where possible
     * @see http://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': 'off',

    /**
     * Enforce consistent linebreak style for operators
     * @see http://eslint.org/docs/rules/operator-linebreak
     */
    'operator-linebreak': [ 'error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],

    /**
     * Require or disallow padding within blocks
     * @see http://eslint.org/docs/rules/padded-blocks
     * @fixable
     */
    'padded-blocks': 'off',

    /**
     * Require or disallow padding lines between statements
     * @see http://eslint.org/docs/rules/padding-line-between-statements
     * @fixable
     */
    'padding-line-between-statements': [ 'error', {
      blankLine: 'always',
      prev: 'directive',
      next: '*'
    }, {
      blankLine: 'any',
      prev: 'directive',
      next: 'directive'
    }],

    /**
     * Require quotes around object literal property names
     * @see http://eslint.org/docs/rules/quote-props
     * @fixable
     */
    'quote-props': [ 'error', 'consistent-as-needed' ],

    /**
     * Enforce the consistent use of either backticks, double, or single quotes
     * @see http://eslint.org/docs/rules/quotes
     * @fixable
     */
    'quotes': [ 'error', 'single' ],

    /**
     * Require JSDoc comments
     * @see http://eslint.org/docs/rules/require-jsdoc
     */
    'require-jsdoc': [ 'off', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],

    /**
     * Require or disallow semicolons instead of ASI
     * @see http://eslint.org/docs/rules/semi
     * @fixable
     */
    'semi': [ 'error', 'never' ],

    /**
     * Enforce consistent spacing before and after semicolons
     * @see http://eslint.org/docs/rules/semi-spacing
     * @fixable
     */
    'semi-spacing': [ 'error', {
      before: false,
      after: true
    }],

    /**
     * Enforce location of semicolons
     * @see http://eslint.org/docs/rules/semi-style
     * @fixable
     */
    'semi-style': [ 'error', 'last' ],

    /**
     * Require object keys to be sorted
     * @see http://eslint.org/docs/rules/sort-keys
     */
    'sort-keys': 'off',

    /**
     * Require variables within the same declaration block to be sorted
     * @see http://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

    /**
     * Enforce consistent spacing before blocks
     * @see http://eslint.org/docs/rules/space-before-blocks
     * @fixable
     */
    'space-before-blocks': [ 'error', 'always' ],

    /**
     * Enforce consistent spacing before function definition opening parenthesis
     * @see http://eslint.org/docs/rules/space-before-function-paren
     * @fixable
     */
    'space-before-function-paren': [ 'error', {
      asyncArrow: 'always',
      anonymous: 'never',
      named: 'never'
    }],

    /**
     * Enforce consistent spacing inside parentheses
     * @see http://eslint.org/docs/rules/space-in-parens
     * @fixable
     */
    'space-in-parens': [ 'error', 'never' ],

    /**
     * Require spacing around infix operators
     * @see http://eslint.org/docs/rules/space-infix-ops
     * @fixable
     */
    'space-infix-ops': 'error',

    /**
     * Enforce consistent spacing before or after unary operators
     * @see http://eslint.org/docs/rules/space-unary-ops
     * @fixable
     */
    'space-unary-ops': [ 'error', {
      nonwords: false,
      words: true
    }],

    /**
     * Enforce consistent spacing after the // or /* in a comment
     * @see http://eslint.org/docs/rules/spaced-comment
     * @fixable
     */
    'spaced-comment': [ 'error', 'always', {
      exceptions: [ '-', '=' ],
      block: {
        balanced: true
      }
    }],

    /**
     * Enforce spacing around colons of switch statements
     * @see http://eslint.org/docs/rules/switch-colon-spacing
     * @fixable
     */
    'switch-colon-spacing': 'error',

    /**
     * Require or disallow spacing between template tags and their literals
     * @see http://eslint.org/docs/rules/template-tag-spacing
     * @fixable
     */
    'template-tag-spacing': [ 'error', 'always' ],

    /**
     * Require or disallow Unicode byte order mark (BOM)
     * @see http://eslint.org/docs/rules/unicode-bom
     * @fixable
     */
    'unicode-bom': [ 'error', 'never' ],

    /**
     * Require parenthesis around regex literals
     * @see http://eslint.org/docs/rules/wrap-regex
     * @fixable
     */
    'wrap-regex': 'error'
  }
}
