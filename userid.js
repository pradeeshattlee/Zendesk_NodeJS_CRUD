//Get Users by ID
var request = require("request");

var options = { method: 'GET',
  url: 'https://<DOMAIN>.zendesk.com/api/v2/users/<user ID>.json',
  headers: 
   { 
     'cache-control': 'no-cache',
     authorization: 'Basic ' + Buffer.from("<User ID>/token:<Your api Token>").toString('base64'),  
    } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});