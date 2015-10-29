(function() {
  'use strict';

  app.directive('contentAbout', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: '../partials/aboutme.html',
      scope: false
    };
  });

}());
