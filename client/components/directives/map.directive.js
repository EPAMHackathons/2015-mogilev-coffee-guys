'use strict';

angular.module('ideaApp')
  .directive('map', function(Idea, $stateParams) {
    return {
      restrict:'A',
      templateUrl: 'components/partials/map/map.html',
      link: function($scope) {

      	var map;
		$scope.afterInit = function($map){
    		map = $map;
		};

		$scope.mapClick = function(e){
    		if (!map.balloon.isOpen()) {
        		var coords = e.get('coords');
        		map.balloon.open(coords, {
           			contentHeader:'Место для новой идеи',
            		//contentBody:'Координаты щелчка: ' + [ coords[0].toPrecision(6), coords[1].toPrecision(6) ].join(', '),
            		contentFooter:'Адресс'
        		});
        		$scope.idea.latitude = coords[0].toPrecision(6);
        		$scope.idea.longitude = coords[1].toPrecision(6);
    		} else {
    			$scope.idea.latitude = "";
        		$scope.idea.longitude = "";
    			map.balloon.close();
     		}
		};

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
