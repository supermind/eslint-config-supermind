module.exports = {

  /**
   * Import plugin static analysis rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Ensure imports point to a file/module that can be resolved
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': [ 'error', {
      caseSensitive: true,
      commonjs: true,
      amd: true
    }],

    /**
     * Ensure named imports correspond to a named export in the remote file
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    'import/named': 'error',

    /**
     * Ensure a default export is present, given a default import
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    'import/default': 'error',

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    'import/namespace': [ 'error', {
      allowComputed: true
    }],

    /**
     * Restrict which files can be imported in a given folder
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    'import/no-restricted-paths': [ 'error', {
      zones: [{
        target: './source/client',
        from: './source/server'
      }, {
        target: './source/server',
        from: './source/client'
      }]
    }],

    /**
     * Forbid import of modules using absolute paths
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',

    /**
     * Forbid require() calls with expressions
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'error',

    /**
     * Prevent importing the submodules of other modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    'import/no-internal-modules': [ 'off', {
      allow: []
    }],

    /**
     * Forbid Webpack loader syntax in imports
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'error'
  }
}
