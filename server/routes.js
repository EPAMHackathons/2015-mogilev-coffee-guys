/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/v1/ideas', require('./api/idea'));
  app.use('/api/v1/users', require('./api/user'));
  app.use('/api/v1/categories', require('./api/category'));
  app.use('/api/v1/uploads', require('./api/upload'));
  app.use('/api/v1/comments', require('./api/comment'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
