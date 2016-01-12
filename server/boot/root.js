const path = require('path');
const loopback = require('loopback');

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
    });
  server.use(router);
};
