'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mytheme = new Module('mytheme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mytheme.register(function(app, auth, database,system) {
   app.set('views', __dirname + '/server/views');

  //We enable routing. By default the Package Object is passed to the routes
  Mytheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  /*Mytheme.menus.add({
    title: 'mytheme example page',
    link: 'mytheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });

*/

  Mytheme.aggregateAsset('css', 'mytheme.css');
  Mytheme.aggregateAsset('css', '../lib/materialize/bin/materialize.css', {global:true});
  Mytheme.aggregateAsset('js', '../lib/materialize/bin/materialize.js', {global:true});



  return Mytheme;
});
