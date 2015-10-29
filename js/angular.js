var app = angular.module('myApp', ['ui.materialize'])

  .controller('assetsController', ['$scope', function($scope) {

    $scope.title = {
      aboutme: 'Who I am'
    };

  }]);
