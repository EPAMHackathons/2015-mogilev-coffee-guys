'use strict';

angular.module('ideaApp')
  .directive('idea', function() {
    return {
      restrict:'A',
      templateUrl: 'components/partials/main/idea.html',
      link: function(scope, Idea) {
      }
    };
  });
