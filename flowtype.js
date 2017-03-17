module.exports = {
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  plugins: [
    'flowtype'
  ],
  extends: [
    './rules/flowtype/flowtype'
  ].map(require.resolve)
}
