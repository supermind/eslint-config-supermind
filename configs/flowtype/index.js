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
    './flowtype'
  ].map(require.resolve)
}
