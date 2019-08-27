# Zendesk_NodeJS_CRUD
Zendesk end users CRUD operations

# API token
API tokens are different from OAuth tokens, which are detailed in the next section. API tokens are auto-generated passwords in the Support admin interface.

Warning: As passwords, API tokens can be used to impersonate anyone in the account, including admins. Make sure to keep them secure. Delete any unused tokens. Delete a token at once if you suspect it's been compromised and create another one if necessary. Another option is to use OAuth tokens, which are described in the next section.

API tokens are managed in the Support admin interface at Admin > Channels > API. The page lets you view, add, or delete tokens. More than one token can be active at the same time. Deleting a token deactivates it permanently.

Basic authentication is used for API tokens. As described in Basic authentication above, the credentials must be sent with the request in an Authorization header.

Use the following format for the credentials:

{email_address}/token:{api_token}

Example:

jdoe@example.com/token:6wiIBWbGkBMo1mRDMuVwkw1EPsNkeUj95PIz2akv
After base64-encoding the resulting string, add it to the Authorization header as follows:

Authorization: Basic amRvZUBleGFtcGxlLmNvbS90b2tlbjo2d2lJQldiR2tCTW8xbVJETXVWd2t3MUVQc05rZVVqOTVQSXoyYWt2
If you use curl to test different endpoints, you can use the following format:

curl https://obscura.zendesk.com/api/v2/users.json \
  -u jdoe@example.com/token:6wiIBWbGkBMo1mRDMuVwkw1EPsNkeUj95PIz2akv
If authenticating over HTTP, url-encode the slash character in {email_address}/token as %2F.

# USAGE 
1-Change the Domain to your domain 
url: 'https://"DOMAIN".zendesk.com/api/v2/users.json'
  
2-Change the <User ID> and <Your api Token> with yours
  authorization: 'Basic ' + Buffer.from(""User ID"/token:"Your api Token"").toString('base64'),
  
3-Install the request package 
   npm i request
   
4-Run the files in cmd node "file name"
