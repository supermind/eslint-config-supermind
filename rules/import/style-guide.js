module.exports = {

  /**
   * Import plugin style guide rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Ensure all imports appear before other statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     */
    'import/first': [ 'error', 'absolute-first' ],

    /**
     * Forbid anonymous values as default exports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     */
    'import/no-anonymous-default-export': 'off',

    /**
     * Report repeated import of the same module in multiple places
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',

    /**
     * Report namespace imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    'import/no-namespace': 'error',

    /**
     * Ensure consistent use of file extension within the import path
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    'import/extensions': [ 'error', 'always', {
      json: 'never',
      jsx: 'never',
      js: 'never'
    }],

    /**
     * Enforce a convention in module import order
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    'import/order': [ 'error', {
      'newlines-between': 'never',
      'groups': [
        'builtin',  // 'fs', 'path' etc.
        'external', // 'lodash', 'react' etc.
        'internal', // 'source/components/header'
        'parent',   // '../../components/footer'
        'sibling',  // './enums', './styles' etc.
        'index'     // './'
      ]
    }],

    /**
     * Enforce a newline after import statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'error',

    /**
     * Prefer a default export if module exports a single name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',

    /**
     * Limit the maximum number of dependencies a module can have
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    'import/max-dependencies': 'off',

    /**
     * Forbid unassigned imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    'import/no-unassigned-import': [ 'error', {
      allow: [
        '*.styl',
        '*.scss',
        '*.css',
        '*.tag'
      ]
    }]
  }
}
