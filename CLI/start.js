var parser = require('./parser');
var io = require('./io');

module.exports = {
    Start: () => {
        parser.Parse(process.argv.slice(2));
    }
}