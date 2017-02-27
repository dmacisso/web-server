const DTSTAMP = new Date().toString();

middleware = {
  requireAuthentication: function(req, res, next) {
      console.log('private route hit!');
      next();
  },
    logger: function(req, res, next) {
    console.log('Requests: ' + DTSTAMP + ' =>' + req.method + ' ' + req.originalUrl);
    next();
        
    }
};

module.exports = middleware;
