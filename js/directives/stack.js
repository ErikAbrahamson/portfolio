(function() {
  'use strict';

  app.directive('contentStack', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: '../partials/stack.html',
      scope: false
    };
  });

}());
