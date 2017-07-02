const twilio = require('twilio');

const accountSid = 'ACd59f83da064b7e11c01692454c206061';
const authToken = '45b8246301b12ce5d8ffb6d142c1eec0';

module.exports = new twilio.Twilio(accountSid, authToken);
