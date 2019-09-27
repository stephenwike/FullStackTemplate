var opts = require('./options');

const msg_Usage = "Usage: [OPTIONS]";
const msg_Description = "Use this fullstack templating CLI to create a simple full stack application.";
const msg_MissingArgument = "Missing argument after flag ";
const msg_UnrecognizedFlag = "Did not recognize flag ";
const msg_NotImplemented = "Sorry, but functionality has not yet been implemented for flag ";
const msg_InvalidArgument = " is not a valid argument for flag ";
const msg_UnhandledException = "Unhandled Exception: ";
const msg_Options = opts.OptsToString();

function Error(msg) {
    console.log();
    console.log("ERROR: " + msg);
}

function Note(msg) {
    console.log();
    console.log(msg);
}

function DisplayUsage() {
    Note(msg_Usage);
    Note(msg_Description);
    Note(msg_Options);
}

module.exports = {
    DisplayUsage: DisplayUsage(),
    UnhandledError: (ex) => {
        Error(msg_UnhandledException + ex);
        DisplayUsage();
    },
    MissingArgument: (arg) => {
        Error(msg_MissingArgument + arg);
        DisplayUsage();
    },
    UnrecognizedFlag: (arg) => {
        Error(msg_UnrecognizedFlag + arg)
        DisplayUsage();
    },
    NotImplemented: (arg) => {
        Error(msg_NotImplemented + arg);
        DisplayUsage();
    },
    InvalidArgument: (context, flag, expect) => {
        Error(context + msg_InvalidArgument + "[" + flag + "] try [" + expect + "] instead.");
    }
}
