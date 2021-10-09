(function () {
  let logs = [];

  beforeAll(function () {
    const originalLog = console.log;
    spyOn(console, 'log').and.callFake(function () {
      logs.push(arguments);
      originalLog.call(console, arguments);
    });
  });

  afterEach(function () {
    setSpecProperty('consoleLogs', logs);
    logs = [];
  });
})();
