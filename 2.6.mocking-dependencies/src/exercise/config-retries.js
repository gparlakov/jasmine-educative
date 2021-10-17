exports.configRetries = function config(/** @type {{ retries?: any; retry?: any; }} */ configObj) {
  configObj = configObj || {};
  const defaultRetries = 1;

  if (typeof configObj.retries === 'function') {
    const maybeRetries = configObj.retries(defaultRetries);
    configObj.retry = typeof maybeRetries === 'number' ? maybeRetries : defaultRetries;
  } else if (typeof configObj.retries === 'number') {
    configObj.retry = configObj.retries;
  } else if (!configObj.retry) {
    configObj.retry = defaultRetries;
  }

  return configObj;
};
