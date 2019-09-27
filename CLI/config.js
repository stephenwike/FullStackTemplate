var _config = {
    LogLevel : ErrorLevel.Warn
};

var ErrorLevel = {
    Error: 0,
    Warn: 1,
    Info: 2,
    Debug: 3
}

function Instance() {
    return _config;
}

module.exports = {
    MinErrorLevel: Instance().LogLevel
}