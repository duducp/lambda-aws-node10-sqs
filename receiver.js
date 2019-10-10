'use strict';

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'SQS event processed.',
      input: event,
    }),
  };

  var body = event.Records[0].body;
  console.log("text: ", JSON.parse(body));

  callback(null, response);
};
