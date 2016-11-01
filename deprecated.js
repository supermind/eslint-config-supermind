module.exports = {

  // Deprecated Rules
  rules: [

    // ESLint
    // http://eslint.org/docs/rules/#deprecated
    'no-native-reassign',
    'no-negated-in-lhs',
    'no-spaced-func',

    // Import Plugin
    // https://github.com/benmosher/eslint-plugin-import/blob/dc3609f895f5ad390d88fd9925dce40960117930/src/index.js#L35
    'import/imports-first',

    // Flowtype Plugin
    // https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-valid-syntax
    'flowtype/valid-syntax',

    // React Plugin
    // https://github.com/yannickcr/eslint-plugin-react/blob/e1697996ff494bf584057418e2974ece7f3d99d8/index.js#L3
    'react/no-comment-textnodes',
    'react/require-extension',
    'react/wrap-multilines'
  ]
}
