// Map routes to controller functions
module.exports = function(router) {
  router.get('/error', function(req, resp) {
    throw new Error('Derp. An error occurred.');
  });
  router.post('/sms', function(req, res) {
    console.log('The Robots are coming! Head for the hills!');
    return;
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    
    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });
};
