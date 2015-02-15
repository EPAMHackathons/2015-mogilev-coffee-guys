'use strict';

angular.module('ideaApp')
  .directive('map', function() {
    return {
      restrict:'A',
      templateUrl: 'components/partials/map/map.html',
      link: function($scope) {

      	$scope.point = {
    		geometry:{
        		type:'Point',
        		coordinates:[30.33,53.91]
    		},
    		properties:{
    			balloonContentHeader: "Idea",
            	balloonContentBody: "Idea description",
            	balloonContentFooter: "Idea address",
            	hintContent: "Idea"
    		}
		};
      }
    };

});
