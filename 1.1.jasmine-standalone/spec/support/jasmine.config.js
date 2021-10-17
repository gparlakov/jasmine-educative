// var reporters = require('jasmine-reporters');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter

jasmine.getEnv().clearReporters();

// jasmine.getEnv().addReporter(new reporters.TerminalReporter({
//   verbosity: 3,
//   color: true,
//   showStack: true,
// }));
// jasmine.getEnv().addReporter(new reporters.TapReporter());

jasmine.getEnv().addReporter(
  new SpecReporter({
    // add jasmine-spec-reporter
    spec: {
      displayPending: true,
    },
  })
)
