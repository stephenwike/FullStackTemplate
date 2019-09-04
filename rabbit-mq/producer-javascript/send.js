var amqp = require('amqplib/callback_api');
const log = require('log-to-file');

log("Sending message...", "logs/sender.log");

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'example';
        var msg = 'An example message from producing javascript app.';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        var logmsg = ` [x] Sent ${msg}`;
        log(logmsg, "logs/sender.log");
    });

    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});