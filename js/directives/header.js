(function() {
  'use strict';

  app.directive('eaHeader', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: '../partials/header.html',
      scope: {
        data: '='
      }
    };
  });

}());
