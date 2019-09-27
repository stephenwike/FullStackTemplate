var amqp = require('amqplib/callback_api');
const log = require('log-to-file');

Logger("connecting...");
amqp.connect('amqp://localhost:30001', function(error0, connection) {
    if (error0) {
        Logger("failed to connect.")
        throw error0;
    }
    Logger("connected.");

    Logger("Creating channel...");
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        Logger("Channel created.");

        var queue = 'example';
        channel.assertQueue(queue, {
            durable: false
        });

        Logger(` [*] Waiting for messages in ${queue}. To exit press CTRL+C`);

        channel.consume(queue, function(msg) {
            Logger(` [x] Received ${msg.content.toString()}`);
        }, {
            noAck: true
        });
    });
});

function Logger(msg) {
    console.log(msg);
    log(msg, "logs/recevier.log");
}
