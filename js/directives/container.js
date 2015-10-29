(function() {
  'use strict';

  app.directive('eaContainer', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      templateUrl: '../partials/container.html',
      scope: false
    };
  });

}());
