module.exports = {

  /**
   * Inferno plugin JSX rules
   * @see https://github.com/infernojs/eslint-plugin-inferno#jsx-specific-rules
   */
  rules: {

    /**
     * Enforce boolean attributes notation in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-boolean-value.md
     * @fixable
     */
    'inferno/jsx-boolean-value': [ 'error', 'always' ],

    /**
     * Validate closing bracket location in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-closing-bracket-location.md
     * @fixable
     */
    'inferno/jsx-closing-bracket-location': [ 'error', {
      nonEmpty: 'tag-aligned',
      selfClosing: 'after-props'
    }],

    /**
     * Validate closing tag location in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-closing-tag-location.md
     * @fixable
     */
    'inferno/jsx-closing-tag-location': 'error',

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-curly-spacing.md
     * @fixable
     */
    'inferno/jsx-curly-spacing': [ 'error', 'never' ],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-equals-spacing.md
     * @fixable
     */
    'inferno/jsx-equals-spacing': [ 'error', 'never' ],

    /**
     * Restrict file extensions that may contain JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-filename-extension.md
     */
    'inferno/jsx-filename-extension': [ 'error', {
      extensions: [ '.js' ]
    }],

    /**
     * Enforce position of the first prop in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-first-prop-new-line.md
     * @fixable
     */
    'inferno/jsx-first-prop-new-line': 'off',

    /**
     * Enforce event handler naming conventions in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-handler-names.md
     */
    'inferno/jsx-handler-names': [ 'error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],

    /**
     * Validate JSX indentation
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-indent.md
     * @fixable
     */
    'inferno/jsx-indent': [ 'error', 2 ],

    /**
     * Validate props indentation in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-indent-props.md
     * @fixable
     */
    'inferno/jsx-indent-props': [ 'error', 2 ],

    /**
     * Validate JSX has key prop when in array or iterator
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-key.md
     */
    'inferno/jsx-key': 'error',

    /**
     * Limit maximum of props on a single line in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    'inferno/jsx-max-props-per-line': 'off',

    /**
     * Prevent usage of .bind() and arrow functions in JSX props
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-bind.md
     */
    'inferno/jsx-no-bind': [ 'error', {
      allowArrowFunctions: false,
      allowBind: false,
      ignoreRefs: false
    }],

    /**
     * Prevent comments from being inserted as text nodes
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    'inferno/jsx-no-comment-textnodes': 'error',

    /**
     * Prevent duplicate props in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    'inferno/jsx-no-duplicate-props': [ 'error', {
      ignoreCase: false
    }],

    /**
     * Prevent usage of unwrapped JSX strings
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-literals.md
     */
    'inferno/jsx-no-literals': 'error',

    /**
     * Prevent usage of unsafe target='_blank'
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'inferno/jsx-no-target-blank': 'error',

    /**
     * Disallow undeclared variables in JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-no-undef.md
     */
    'inferno/jsx-no-undef': 'error',

    /**
     * Enforce PascalCase for user-defined JSX components
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-pascal-case.md
     */
    'inferno/jsx-pascal-case': 'error',

    /**
     * Enforce props alphabetical sorting
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-sort-props.md
     */
    'inferno/jsx-sort-props': 'off',

    /**
     * Validate whitespace in and around the JSX opening and closing brackets
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-tag-spacing.md
     * @fixable
     */
    'inferno/jsx-tag-spacing': [ 'error', {
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      closingSlash: 'never'
    }],

    /**
     * Prevent Inferno to be incorrectly marked as unused
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-uses-inferno.md
     */
    'inferno/jsx-uses-inferno': 'error',

    /**
     * Prevent variables used in JSX to be incorrectly marked as unused
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-uses-vars.md
     */
    'inferno/jsx-uses-vars': 'error',

    /**
     * Prevent missing parentheses around multilines JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/jsx-wrap-multilines.md
     * @fixable
     */
    'inferno/jsx-wrap-multilines': 'error'
  }
}
