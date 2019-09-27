const io = require('./io');
const options = require('./options');
const tasks = require('./tasks');

function ParseArgs(args) {

    let opts = options.GetOpts();

    try {
        SafeParseArg(opts, args);
    }
    catch (ex) {
        switch (ex.error)
        {
            case "Missing Argument": {
                io.MissingArgument(ex.context);
                break;
            }
            case "Unrecognized Flag": {
                io.UnrecognizedFlag(ex.context);
                break;
            }
            case "Not Implemented": {
                io.NotImplemented(ex.context);
                break;
            }
            case "Invalid Argument": {
                io.InvalidArgument(ex.context, ex.flag, ex.expect);
                break;
            }
            default: {
                io.UnhandledError(ex);
                break;
            }
        }
        
        process.exit(2);
    }
}

function SafeParseArg(opts, args) {
    for (let opt of opts) {

        let isParsing = true;
        while (isParsing) {

            isParsing = false;
            let argIndex = args.indexOf(opt);

            if (argIndex != -1) {
                if (args.length == argIndex + 1) throw { error: "Missing Argument", context: args[argIndex] };

                isParsing = true;
                tasks.CreateTask(args[argIndex], args[argIndex + 1]);
                args.splice(argIndex, 2);
            }
        }
    }
}

module.exports = {
    Parse: (args) => {
        if (args.length === 0) {
            io.DisplayUsage();
            process.exit(1);
        }

        console.log(args);
        ParseArgs(args);
    }
}