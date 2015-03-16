'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Mytheme, app, auth, database) {

  app.get('/mytheme/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/mytheme/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/mytheme/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/mytheme/example/render', function(req, res, next) {
    Mytheme.render('index', {
      package: 'mytheme'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
