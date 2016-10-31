module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    }
  },
  plugins: [
    'flowtype'
  ],
  extends: [
    './rules/flowtype/flowtype'
  ].map(require.resolve)
}
