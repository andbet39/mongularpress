'use strict';


var marked;
/* jshint -W098 */
angular.module('mean.post').controller('PostController', ['$scope', 'Global', 'Post',
  function($scope, Global, Post) {
    $scope.global = Global;

    $scope.package = {
      name: 'post'
    };

    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });


    $scope.result = '';
    $scope.post = {title:'' , content:''};

    $scope.$watch('post.content', function() {
      $scope.result = marked($scope.post.content);
    });

  }
]);
