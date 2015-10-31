var app = angular.module('portfolioApp', ['ui.materialize'])

  .controller('assetsController', ['$scope', function($scope) {

    $scope.title = {
      aboutme: 'Who I am'
    };

  }]);
