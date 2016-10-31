module.exports = {

  /**
   * Import plugin module system rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Report AMD require and define calls
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    'import/no-amd': 'error',

    /**
     * Report CommonJS require calls and module.exports or exports.*
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    'import/no-commonjs': 'error',

    /**
     * No Node.js builtin modules
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    'import/no-nodejs-modules': 'off',

    /**
     * Report potentially ambiguous parse goal (script vs. module)
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'error'
  }
}
