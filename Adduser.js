//Add End user
var request = require("request");

var options = { method: 'POST',
  url: 'https://<DOMAIN>.zendesk.com/api/v2/users.json',
  headers: 
   { 'cache-control': 'no-cache',
    authorization: 'Basic ' + Buffer.from("<User ID>/token:<Your api Token>").toString('base64'),
     'content-type': 'application/json'
     },
  body: 
   { user: 
      { name: 'Venki tester',
        email: 'venkitester@gmail.com',
        phone: '918745905440' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});