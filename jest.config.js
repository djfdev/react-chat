module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: '<rootDir>/setupTests.js',
  moduleNameMapper: {
    '^.+\\.css$': '<rootDir>/cssStub.js'
  }
}
