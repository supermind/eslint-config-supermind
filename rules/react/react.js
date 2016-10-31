module.exports = {

  /**
   * React plugin JSX rules
   * @see https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
   */
  rules: {

    /**
     * Prevent missing displayName in a React component definition
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': 'off',

    /**
     * Forbid certain props on Components
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    'react/forbid-component-props': 'off',

    /**
     * Forbid certain propTypes
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /**
     * Prevent passing children as props
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    'react/no-children-prop': 'off',

    /**
     * Prevent usage of dangerous JSX properties
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    'react/no-danger': 'off',

    /**
     * Prevent problem with children and props.dangerouslySetInnerHTML
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    'react/no-danger-with-children': 'off',

    /**
     * Prevent usage of deprecated methods
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'off',

    /**
     * Prevent usage of setState in componentDidMount
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'off',

    /**
     * Prevent usage of setState in componentDidUpdate
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'off',

    /**
     * Prevent direct mutation of this.state
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'react/no-direct-mutation-state': 'off',

    /**
     * Prevent usage of findDOMNode
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    'react/no-find-dom-node': 'off',

    /**
     * Prevent usage of isMounted
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    'react/no-is-mounted': 'off',

    /**
     * Prevent multiple component definition per file
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': 'off',

    /**
     * Prevent usage of the return value of React.render
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    'react/no-render-return-value': 'off',

    /**
     * Prevent usage of setState
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /**
     * Prevent using string references in ref attribute.
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    'react/no-string-refs': 'off',

    /**
     * Prevent invalid characters from appearing in markup
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    'react/no-unescaped-entities': 'off',

    /**
     * Prevent usage of unknown DOM property
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     * @fixable
     */
    'react/no-unknown-property': 'off',

    /**
     * Prevent definitions of unused prop types
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'off',

    /**
     * Enforce ES5 or ES6 class for React Components
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': 'off',

    /**
     * Enforce stateless React Components to be written as a pure function
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 'off',

    /**
     * Prevent missing props validation in a React component definition
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'off',

    /**
     * Prevent missing React when using JSX
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'off',

    /**
     * Enforce React components to have a shouldComponentUpdate method
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'off',

    /**
     * Enforce ES5 or ES6 class for returning value in render function
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    'react/require-render-return': 'off',

    /**
     * Prevent extra closing tags for components without children
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     * @fixable
     */
    'react/self-closing-comp': 'off',

    /**
     * Enforce component methods order
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    'react/sort-comp': 'off',

    /**
     * Enforce propTypes declarations alphabetical sorting
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'off',

    /**
     * Enforce style prop value being an object
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'off'
  }
}
