const { DefaultReporter } = require('jasmine-browser-runner');

function Reporter() {}
Reporter.prototype = new DefaultReporter();
const originalSpecDone = Reporter.prototype.specDone;

Reporter.prototype.specDone = function (info) {
  // originalSpecDone.call(this, info) // just adds a '.' in the output for a passed test
  if (Array.isArray(info.properties.consoleLogs)) {
    info.properties.consoleLogs.forEach((a) => console.log(...a));
  }
  delete info.properties.consoleLogs;
};

module.exports = Reporter;
