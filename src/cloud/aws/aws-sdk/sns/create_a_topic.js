// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'ap-south-1'});

// Create promise and SNS service object
var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "Login2"}).promise();

// Handle promise's fulfilled/rejected states
createTopicPromise.then(
  function(data) {
    console.log("Topic ARN is " + data.TopicArn);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
