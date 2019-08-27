var request = require("request");

var options = { method: 'PUT',
  url: 'https://<DOMAIN>.zendesk.com/api/v2/users/<user ID>.json',
  headers: 
   { 
     'cache-control': 'no-cache',
     authorization: 'Basic ' + Buffer.from("<User ID>/token:<Your api Token>").toString('base64'),
     'content-type': 'application/json' },
  body: 
   { user: 
      { name: 'Venki tester up',
        email: 'venkitesterupdate@gmail.com',
        phone: '919745905440' } },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
