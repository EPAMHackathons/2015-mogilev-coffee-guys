'use strict';

angular.module('ideaApp')
  .directive('map', function(Idea, $stateParams) {
    return {
      restrict:'A',
      scope: {
      	ideaid: "@"
      },
      templateUrl: 'components/partials/map/map.html',
      link: function($scope) {

		$scope.geoObjects = [];

		if(typeof $stateParams.id != 'undefined') {
			Idea.getIdea().success(function(data) {
				var geoObj = {
    				geometry:{
        				type:'Point',
        				coordinates:[data.latitude, data.longitude]
    				},

    				properties:{
    					balloonContentHeader: data.summary,
            			balloonContentBody: data.description,
            			balloonContentFooter: "Idea address",
            			hintContent: data.summary
    				}
        		};

        		$scope.geoObjects.push(geoObj);

			});

		} else {
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


      }
    };

});
