module.exports = {

  /**
   * Import plugin rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    //----------------------------------------
    // Static Analysis
    //----------------------------------------

    /**
     * Ensure imports point to a file/module that can be resolved
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',

    /**
     * Ensure named imports correspond to a named export in the remote file
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    'import/named': 'off',

    /**
     * Ensure a default export is present, given a default import
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    'import/default': 'off',

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    'import/namespace': 'off',

    /**
     * Restrict which files can be imported in a given folder
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    'import/no-restricted-paths': 'off',

    /**
     * Forbid import of modules using absolute paths
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'off',

    /**
     * Forbid require() calls with expressions
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'off',

    /**
     * Prevent importing the submodules of other modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    'import/no-internal-modules': 'off',

    /**
     * Forbid Webpack loader syntax in imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'off',

    //----------------------------------------
    // Helpful Warnings
    //----------------------------------------

    /**
     * Report any invalid exports, i.e. re-export of the same name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    'import/export': 'off',

    /**
     * Report use of exported name as identifier of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'off',

    /**
     * Report use of exported name as property of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'off',

    /**
     * Report imported names marked with @deprecated documentation tag
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'off',

    /**
     * Forbid the use of extraneous packages
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': 'off',

    /**
     * Forbid the use of mutable exports with var or let
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'off',

    //----------------------------------------
    // Module Systems
    //----------------------------------------

    /**
     * Report potentially ambiguous parse goal (script vs. module)
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',

    /**
     * Report CommonJS require calls and module.exports or exports.*
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    'import/no-commonjs': 'off',

    /**
     * Report AMD require and define calls
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    'import/no-amd': 'off',

    /**
     * No Node.js builtin modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    'import/no-nodejs-modules': 'off',

    //----------------------------------------
    // Style Guide
    //----------------------------------------

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
