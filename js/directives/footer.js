(function() {
  'use strict';

  app.directive('eaFooter', function() {
    return {
      restrict: 'E',
      replace: false,
      transclude: false,
      templateUrl: '../partials/footer.html',
      scope: false
    };
  });

}());
