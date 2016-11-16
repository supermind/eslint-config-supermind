module.exports = {

  /**
   * Import plugin helpful warning rules
   * @see https://github.com/benmosher/eslint-plugin-import#rules
   */
  rules: {

    /**
     * Report any invalid exports, i.e. re-export of the same name
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    'import/export': 'error',

    /**
     * Report use of exported name as identifier of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'error',

    /**
     * Report use of exported name as property of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'error',

    /**
     * Report use of exported name as identifier of default export
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
     */
    'import/no-named-default': 'error',

    /**
     * Report imported names marked with [at]deprecated documentation tag
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'error',

    /**
     * Forbid the use of extraneous packages
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false
    }],

    /**
     * Forbid the use of mutable exports with var or let
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error'
  }
}
