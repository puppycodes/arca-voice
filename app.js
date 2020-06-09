require('dotenv').config();

const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const client = require('twilio')(accountSid, authToken);
// URL can't be relative
client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+15555555',
         from: '+15555555'
       })
      .then(call => console.log(call.sid));
