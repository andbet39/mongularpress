'use strict';

angular.module('mean.post').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('post example page', {
      url: '/post/example',
      templateUrl: 'post/views/index.html'
    })
        .state('post write page', {
          url: '/post/write',
          templateUrl: 'post/views/write.html'
        });
  }
]);
