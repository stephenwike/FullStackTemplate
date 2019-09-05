var amqp = require('amqplib/callback_api');
const log = require('log-to-file');
var tries = 0;

Logger("Starting javascript producer...");

(function boot() {
    Logger("Connecting to amqp...");
    ConnectToAMQP();
})();

function ConnectToAMQP() {
    Logger(`Connecting attempt #${tries}.`);
    if (tries < 5) {
        AttemptConnection()
    } else {
        Logger('Could not connect.');
    }
}

function AttemptConnection() {
    setTimeout(() => {
        amqp.connect('amqp://localhost', function (error0, connection) {
            if (error0) {
                Logger(`ERROR: ${error0}`)
                ++tries;
                ConnectToAMQP();
            } else {
                CreateChannel(connection);
            }
        });
    }, 10000);
}

function CreateChannel(connection) {
    Logger("Creating channel...");
    connection.createChannel(function (error1, channel) {
        if (error1) {
            Logger(error1);
        } else {
            SendMessage(channel);
        }
    });
}

function SendMessage(channel) {
    if (!process.env.PROD_JS_EXIT) {
        Logger("Creating message...");
        
        var queue = 'example';
        var msg = 'An example message from producing javascript app.';

        channel.assertQueue(queue, {
            durable: false
        });

        WriteMessageToChannel(channel, queue, msg);
    } else {
        setTimeout(function () {
            connection.close();
            process.exit(0);
        }, 500);
    }
}

function WriteMessageToChannel(channel, queue, msg) {
    setTimeout(() => {
        Logger("Sending message...");

        channel.sendToQueue(queue, Buffer.from(msg));

        Logger(` [x] Sent ${msg}`);

        SendMessage(channel);
    }, 5000);
}

function Logger(msg) {
    console.log(msg);
    log(msg, "logs/sender.log");
}