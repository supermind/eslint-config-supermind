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
    'import/first': 'off',

    /**
     * Report repeated import of the same module in multiple places
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'off',

    /**
     * Report namespace imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    'import/no-namespace': 'off',

    /**
     * Ensure consistent use of file extension within the import path
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    'import/extensions': 'off',

    /**
     * Enforce a convention in module import order
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    'import/order': 'off',

    /**
     * Enforce a newline after import statements
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'off',

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
    'import/no-unassigned-import': 'off'
  }
}
