angular.module('ideaApp')
  .directive('map', function() {
    return {
      restrict:"A",
      templateUrl: "components/partials/map/map.html",
      link: function(scope, element, attributes, ngModel) {
      }
    };
  });
