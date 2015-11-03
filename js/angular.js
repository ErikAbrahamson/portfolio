var app = angular.module('portfolioApp', ['ui.materialize'])

  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  .controller('assetsController', ['$scope', function($scope) {

    $scope.title = {
      aboutme: 'Who I am'
    };

  }]);
