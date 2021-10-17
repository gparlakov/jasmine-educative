exports.config = function config(configObj) {
    if(configObj && typeof configObj.configure === 'function') {
        configObj = configObj.configure(configObj);
    }

    return configObj;
}
