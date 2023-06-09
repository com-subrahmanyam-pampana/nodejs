// Load the AWS SDK for Node.js
const AWS = require('aws-sdk')
// Set the region
AWS.config.update({ region: 'us-west-2' })

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

// Call DynamoDB to read the item from the table
// ddb.getItem(params, function (err, data)  {
//   if (err) {
//     console.log('Error', err)
//   } else {
//     // Convert a DynamoDB record into a JavaScript object.
//     const unmarshallData = AWS.DynamoDB.Converter.unmarshall(data.Item)
//     console.log('Success:', unmarshallData)
//   }
// })

const convertToJSObject = ddbRecord => ddbRecord ? AWS.DynamoDB.Converter.unmarshall(ddbRecord) : null
async function getDataq () {
  const params = {
    TableName: 'CUSTOMER_LIST',
    Key: {
      USER_ID: { N: '002' },
      USER_NAME: { S: 'Richard Roe' }
    }
  }
  const ddbResponse = await ddb.getItem(params).promise()
  const unmarshallData = convertToJSObject(ddbResponse?.Item)
  console.log(unmarshallData)
}

getDataq()
