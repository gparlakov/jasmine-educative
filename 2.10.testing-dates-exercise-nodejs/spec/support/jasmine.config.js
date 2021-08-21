const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters();

jasmine.getEnv().addReporter(
  new SpecReporter({
    // add jasmine-spec-reporter
    spec: {
      displayPending: true,
    },
  })
)
