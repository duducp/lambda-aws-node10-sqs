'use strict';

const AWS = require('aws-sdk');
const sqs = new AWS.SQS({
  region: process.env.REGION
});

module.exports.handler = (event, context, callback) => {
  const accountId = context.invokedFunctionArn.split(":")[4];
  const queueUrl = `https://sqs.${process.env.REGION}.amazonaws.com/${accountId}/${process.env.QUEUE_NAME}`;
  var responseCode = 200;
  var responseBody = {};

  // SQS message parameters
  const params = {
    MessageBody: event.body,
    QueueUrl: queueUrl
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) {
      console.log('error:', "failed to send message" + err);
      responseCode = 500;
    } else {
      console.log('data:', data.MessageId);
      responseBody.message = 'Sent to ' + queueUrl;
      responseBody.messageId = data.MessageId;
    }

    const response = {
      statusCode: responseCode,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responseBody)
    };

    callback(null, response);
  });
};
