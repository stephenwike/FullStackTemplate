var options = [
    "debug",
    "info",
    "warn",
    "error"
]

module.exports = {
    Setup: (arg) => {
        if (options.indexOf(arg.toLowerCase()) === -1) throw { error: "Invalid Argument", context: arg, flag: "-l, --logger", expect: options }


    }
}