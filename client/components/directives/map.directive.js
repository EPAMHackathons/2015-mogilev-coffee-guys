'use strict';

angular.module('ideaApp')
  .directive('map', function(Idea) {
    return {
      restrict:'A',
      templateUrl: 'components/partials/map/map.html',
      link: function($scope) {

		$scope.geoObjects = [];
		Idea.getIdeas().success(function(data) {

      		data.forEach(function(entry) {

      			var geoObj = {
    				geometry:{
        				type:'Point',
        				coordinates:[entry.latitude, entry.longitude]
    				},

    				properties:{
    					balloonContentHeader: entry.summary,
            			balloonContentBody: entry.description,
            			balloonContentFooter: "Idea address",
            			hintContent: entry.summary
    				}
        		};

            	$scope.geoObjects.push(geoObj);

      		});
      	});

      }
    };

});
