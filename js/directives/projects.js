(function() {
  'use strict';

  app.directive('contentProjects', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: '../partials/projects.html',
      scope: false
    };
  });

}());
