const specReporter = require('jasmine-spec-reporter').SpecReporter

module.exports = {
  srcDir: 'src',
  srcFiles: [
    '**/*.?(m)js'
  ],
  specDir: 'spec',
  specFiles: [
    '**/*[sS]pec.?(m)js'
  ],
  helpers: [
    'helpers/**/*.?(m)js'
  ],
  random: false,
  stopSpecOnExpectationFailure: false,
  browser: {
    name: 'headlessChrome'
  },
  reporters: [new specReporter(), './spec/support/terminal-console-reporter.js']
}
