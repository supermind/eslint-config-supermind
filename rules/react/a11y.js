module.exports = {

  /**
   * JSX a11y plugin rules
   * @see https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
   */
  rules: {

    /**
     * Enforce all anchors to contain accessible content
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
     */
    'jsx-a11y/anchor-has-content': 'error',

    /**
     * Enforce all aria-* props are valid
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
     */
    'jsx-a11y/aria-props': 'error',

    /**
     * Enforce ARIA state and property values are valid
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
     */
    'jsx-a11y/aria-proptypes': 'error',

    /**
     * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
     */
    'jsx-a11y/aria-role': 'error',

    /**
     * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
     */
    'jsx-a11y/aria-unsupported-elements': 'error',

    /**
     * Enforce a clickable non-interactive element has at least one keyboard event listener
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
     */
    'jsx-a11y/click-events-have-key-events': 'off',

    /**
     * Enforce heading (h1, h2, etc) elements contain accessible content
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
     */
    'jsx-a11y/heading-has-content': 'error',

    /**
     * Enforce an anchor element's href prop value is not just #
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
     */
    'jsx-a11y/href-no-hash': 'error',

    /**
     * Enforce <html> element has lang prop
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
     */
    'jsx-a11y/html-has-lang': 'error',

    /**
     * Enforce that <img> JSX elements use the alt prop
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md
     */
    'jsx-a11y/img-has-alt': [ 'error', [ 'Image' ]],

    /**
     * Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
     */
    'jsx-a11y/img-redundant-alt': 'error',

    /**
     * Enforce that <label> elements have the htmlFor prop
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
     */
    'jsx-a11y/label-has-for': 'error',

    /**
     * Enforce lang attribute has a valid value
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
     */
    'jsx-a11y/lang': 'error',

    /**
     * Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
     */
    'jsx-a11y/mouse-events-have-key-events': 'off',

    /**
     * Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
     */
    'jsx-a11y/no-access-key': 'error',

    /**
     * Enforce <marquee> elements are not used
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-marquee.md
     */
    'jsx-a11y/no-marquee': 'error',

    /**
     * Enforce usage of onBlur over onChange on select menus for accessibility
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
     */
    'jsx-a11y/no-onchange': 'error',

    /**
     * Enforce non-interactive elements have no interactive handlers
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
     */
    'jsx-a11y/no-static-element-interactions': 'error',

    /**
     * Enforce that elements with onClick handlers must be focusable
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-focus.md
     */
    'jsx-a11y/onclick-has-focus': 'off',

    /**
     * Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onclick-has-role.md
     */
    'jsx-a11y/onclick-has-role': 'error',

    /**
     * Enforce that elements with ARIA roles must have all required attributes for that role
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
     */
    'jsx-a11y/role-has-required-aria-props': 'error',

    /**
     * Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
     */
    'jsx-a11y/role-supports-aria-props': 'error',

    /**
     * Enforce scope prop is only used on <th> elements
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
     */
    'jsx-a11y/scope': 'error',

    /**
     * Enforce tabIndex value is not greater than zero
     * @see https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
     */
    'jsx-a11y/tabindex-no-positive': 'off'
  }
}
