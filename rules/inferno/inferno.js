module.exports = {

  /**
   * Inferno plugin rules
   * @see https://github.com/infernojs/eslint-plugin-inferno#list-of-supported-rules
   */
  rules: {

    /**
     * Prevent missing displayName in a Inferno component definition
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/display-name.md
     */
    'inferno/display-name': [ 'error', {
      ignoreTranspilerName: false
    }],

    /**
     * Forbid certain props on Components
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/forbid-component-props.md
     */
    'inferno/forbid-component-props': 'error',

    /**
     * Forbid certain propTypes
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/forbid-prop-types.md
     */
    'inferno/forbid-prop-types': 'error',

    /**
     * Prevent passing children as props
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-children-prop.md
     */
    'inferno/no-children-prop': 'error',

    /**
     * Prevent using Array index in key props
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-array-index-key.md
     */
    'inferno/no-array-index-key': 'error',

    /**
     * Prevent usage of dangerous JSX properties
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-danger.md
     */
    'inferno/no-danger': 'error',

    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-danger-with-children.md
     */
    'inferno/no-danger-with-children': 'error',

    /**
     * Prevent usage of deprecated methods
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-deprecated.md
     */
    'inferno/no-deprecated': 'error',

    /**
     * Prevent usage of setState in componentDidMount
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-did-mount-set-state.md
     */
    'inferno/no-did-mount-set-state': 'error',

    /**
     * Prevent usage of setState in componentDidUpdate
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-did-update-set-state.md
     */
    'inferno/no-did-update-set-state': 'error',

    /**
     * Prevent direct mutation of this.state
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'inferno/no-direct-mutation-state': 'error',

    /**
     * Prevent usage of findDOMNode
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-find-dom-node.md
     */
    'inferno/no-find-dom-node': 'error',

    /**
     * Prevent usage of isMounted
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-is-mounted.md
     */
    'inferno/no-is-mounted': 'error',

    /**
     * Prevent multiple component definition per file
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-multi-comp.md
     */
    'inferno/no-multi-comp': [ 'error', {
      ignoreStateless: true
    }],

    /**
     * Prevent usage of setState
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-set-state.md
     */
    'inferno/no-set-state': 'off',

    /**
     * Prevent using string references in ref attribute.
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-string-refs.md
     */
    'inferno/no-string-refs': 'error',

    /**
     * Prevent invalid characters from appearing in markup
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-unescaped-entities.md
     */
    'inferno/no-unescaped-entities': 'error',

    /**
     * Prevent usage of unknown DOM property
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-unknown-property.md
     * @fixable
     */
    'inferno/no-unknown-property': 'error',

    /**
     * Prevent definitions of unused prop types
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/no-unused-prop-types.md
     */
    'inferno/no-unused-prop-types': 'error',

    /**
     * Enforce ES5 or ES6 class for Inferno Components
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/prefer-es6-class.md
     */
    'inferno/prefer-es6-class': [ 'error', 'always' ],

    /**
     * Enforce stateless Inferno Components to be written as a pure function
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/prefer-stateless-function.md
     */
    'inferno/prefer-stateless-function': [ 'error', {
      ignorePureComponents: true
    }],

    /**
     * Prevent missing props validation in a Inferno component definition
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/prop-types.md
     */
    'inferno/prop-types': [ 'error', {
      skipUndeclared: false
    }],

    /**
     * Prevent missing Inferno when using JSX
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/inferno-in-jsx-scope.md
     */
    'inferno/inferno-in-jsx-scope': 'error',

    /**
     * Enforce Inferno components to have a shouldComponentUpdate method
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/require-optimization.md
     */
    'inferno/require-optimization': 'off',

    /**
     * Enforce ES5 or ES6 class for returning value in render function
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/require-render-return.md
     */
    'inferno/require-render-return': 'error',

    /**
     * Prevent extra closing tags for components without children
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/self-closing-comp.md
     * @fixable
     */
    'inferno/self-closing-comp': [ 'error', {
      component: true,
      html: true
    }],

    /**
     * Enforce component methods order
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/sort-comp.md
     */
    'inferno/sort-comp': [ 'error', {
      order: [
        'static-methods',
        'lifecycle',
        'render',
        '/^render.+$/',
        '/^handle.+$/',
        'everything-else'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ]
      }
    }],

    /**
     * Enforce propTypes declarations alphabetical sorting
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/sort-prop-types.md
     */
    'inferno/sort-prop-types': 'off',

    /**
     * Enforce style prop value being an object
     * @see https://github.com/infernojs/eslint-plugin-inferno/blob/master/docs/rules/style-prop-object.md
     */
    'inferno/style-prop-object': 'error'
  }
}
