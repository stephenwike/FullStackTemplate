const opts = [
    { short: 'b', long: 'build', type: '{ local | docker | kubernetes | helm }', desc: "builds the project with specified deployment enironment." },
    { short: 'd', long: 'database', type: '{ postgres | mongodb | mssql }', desc: 'Creates database template.' },
    { short: 'f', long: 'frontend', type: '{ angular | react | vue | node }', desc: 'Creates a front end node.' },
    { short: 'l', long: 'logger', type: '{ debug | info | warn | error }', desc: 'Outputs logs to console.' },
    { short: 'm', long: 'messagebroker', type: '{ rabbitmq | kafka }', desc: "Creates a message broker." },
    { short: 's', long: 'service', type: '{ node | dotnetcore }', desc: 'Creates a service.' },
    { short: 't', long: 'test', type: '{ xunit | cucumber }', desc: 'Creates a test framework.' }
]

module.exports = {
    OptsToString: () => {
        let phrase = "Options:\r\n";
        for (let opt of opts) {
            let short = `-${opt.short},`.padStart(6);
            let long = `  --${opt.long}`.padEnd(20);
            let type = `${opt.type}`.padEnd(46);
            let desc = `${opt.desc}`;
            phrase += `${short}${long}${type}${desc}\r\n`;
        }
        return phrase;
    },
    GetOpts() {
        let optsList = [];
        for (let opt of opts) {
            optsList.push(`-${opt.short}`);
            optsList.push(`--${opt.long}`);
        }
        return optsList;
    }
}