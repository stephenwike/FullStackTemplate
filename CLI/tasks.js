module.exports = {
    CreateTask: (flag, arg) => {
        console.log(`FLAG DETECTED: ${flag} with argument ${arg}.`);

        var task = TaskType(flag);
        task.Setup(arg);
    }
}

function TaskType(flag) {
    switch(flag) {
        // case '-b':
        // case '--build': {
        //     return require('./tasks/build-task');
        // }
        // case '-d':
        // case '--database': {
        //     return require('./tasks/database-task');
        // }
        // case '-f':
        // case '--frontend': {
        //     return require('./tasks/frontend-task');
        // }
        case '-l':
        case '--logger': {
            return require('./tasks/logger-task');
        }
        default: {
            throw { error: "Not Implemented", context: flag };
        }
    }
}

// { short: 'b', long: 'build', type: '{ local | docker | kubernetes | helm }', desc: "builds the project with specified deployment enironment." },
// { short: 'd', long: 'database', type: '{ postgres | mongodb | mssql }', desc: 'Creates database template.' },
// { short: 'f', long: 'frontend', type: '{ angular | react | vue | node }', desc: 'Creates a front end node.' },
// { short: 'l', long: 'logger', type: '{ debug | info | warn | error }', desc: 'Outputs logs to console.' },
// { short: 'm', long: 'messagebroker', type: '{ rabbitmq | kafka }', desc: "Creates a message broker." },
// { short: 's', long: 'service', type: '{ node | dotnetcore }', desc: 'Creates a service.' },
// { short: 't', long: 'test', type: '{ xunit | cucumber }', desc: 'Creates a test framework.' }