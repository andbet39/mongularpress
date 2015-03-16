'use strict';

angular.module('mean.mytheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mytheme example page', {
      url: '/mytheme/example',
      templateUrl: 'mytheme/views/index.html'
    });
  }
]);
